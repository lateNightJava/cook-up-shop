const uid = require('uid-safe');
const db = require('../db');
const { SessionsQuery, ExtensionsQuery } = require('../queries');

class Session {
  constructor(params) {

  }

  static async create(user) {
    const { userPk } = user;
    const sessionId = await uid(24);

    await db.query(ExtensionsQuery.UUID_OSSP);
    const rowData = await db.query(SessionsQuery.CREATE_SESSION, [sessionId, 'fakeip', 'fakeagent', userPk]);
    console.log(rowData);
    const sessionData = rowData.parsedRows[0];

    return new Session(sessionData);
  }
};

module.exports = Session;



class User {
  constructor (params = {}) {
    // super({ 
    //   keys: { 
    //     pk: null,
    //     id: null,
    //     firstName: null,
    //     lastName: null,
    //     producerName: null,
    //     email: null,
    //     passwordHash: null,
    //     createdAt: null,
    //     updatedAt: null
    //   },
    //   callback: this[key] = params[key] || null,
    //   params,
    // })
    // const { 
    //   pk = null,
    //   id = null,
    //   firstName = null,
    //   lastName = null,
    //   producerName = null,
    //   email = null,
    //   passwordHash = null,
    //   createdAt = null,
    //   updatedAt = null,
    // } = params;

    // this.pk = pk;
    // this.id = id;
    // this.firstName = firstName;
    // this.lastName = lastName;
    // this.producerName = producerName;
    // this.email = email;
    // this.passwordHash = passwordHash;
    // this.createdAt = createdAt;
    // this.updatedAt = updatedAt;

    Object.keys(params).forEach(key => this[key] = params[key] || null);
  }

  static async find(params) {
    const { userId, email } = params;
    let rowData;

    if (userId) {
      rowData = await db.query(UsersQuery.FIND_USER_BY_ID, [userId]);
    } else if (email) {
      rowData = await db.query(UsersQuery.FIND_USER_BY_EMAIL, [email]);
    }
    console.log('rowData =', rowData);

    const userData = rowData.parsedRows[0];
    console.log('userData =', userData);

    return new User(userData);
  }

  static async create(params) {
    const { firstName, lastName, producerName, email, password } = params;
    const passwordHash = await generatePasswordHash(password);

    await db.query(ExtensionsQuery.UUID_OSSP);
    const rowData = await db.query(UsersQuery.CREATE_USER, [firstName, lastName, producerName, email, passwordHash]);
    console.log(rowData);
    const userData = rowData.parsedRows[0];
    console.log('userData =', userData);
    
    return new User(userData);
  }

  verifyPassword({ password }) {
    return verifyPassword(this.passwordHash, password);
  }

  update(params) {
  
  }

  destroy() {

  }

  toJsonRes() {
    return { 
      userId: this.userId,
      firstName: this.firstName, 
      lastName: this.lastName, 
      producerName: this.producerName, 
      email: this.email, 
      createdAt: this.createdAt, 
      updatedAt: this.updatedAt,
    };
  }

  toTableRow() {
    return { 
      first_name: this.firstName, 
      last_name: this.lastName, 
      producer_name: this.producerName, 
      email: this.email, 
      created_at: this.createdAt, 
      updated_at: this.updatedAt,
    };
  }
};

module.exports = User;