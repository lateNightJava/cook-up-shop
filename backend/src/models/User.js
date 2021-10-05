const db = require('../db');
const { generatePasswordHash } = require('../util/auth');
const { UsersQuery } = require('../queries');

class User {
  constructor (params) {
    const { 
      id = null,
      firstName = null,
      lastName = null,
      producerName = null,
      email = null,
      passwordHash = null,
      createdAt = null,
      updatedAt = null,
    } = params;

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.producerName = producerName;
    this.email = email;
    this.passwordHash = passwordHash;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static async find(params) {
    const { id, email } = params;
    let rowData;

    if (id) {
      rowData = await db.query(UsersQuery.FIND_USER_BY_ID, [id]);
    } else if (email) {
      rowData = await db.query(UsersQuery.FIND_USER_BY_EMAIL, [email]);
    }
    console.log('rowData =', rowData);

    const userData = rowData.parsedRows[0];
    console.log('userData =', userData);

    return new User(userData);
  }

  async create(params) {
    const { firstName, lastName, producerName, email } = params;
    const passwordHash = await generatePasswordHash(params.password);

    const dbUser = await db.query(UsersQuery.CREATE_USER, [firstName, lastName, producerName, email, passwordHash]);
    console.log(dbUser);
    
    return new User(params);
  }

  update(params) {
  
  }

  destroy() {

  }

  toJsonRes() {
    return { 
      firstName: this.firstName, 
      lastName: this.lastName, 
      producerName: this.producerName, 
      email: this.email, 
      createdAt: this.createdAt, 
      updatedAt: this.updatedAt,
    };
  }

  toTable() {
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



