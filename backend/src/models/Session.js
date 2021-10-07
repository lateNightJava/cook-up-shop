const uid = require('uid-safe');
const db = require('../db');
const { SessionsQuery, ExtensionsQuery } = require('../queries');

class Session {
  constructor(params) {
    Object.keys(params).forEach(key => this[key] = params[key] || null);
  }

  static async find(params) {
    const { sessionId } = params;
  }

  static async create(user, ipAddress = 'fakeIp', userAgent = 'fakeAgent') {
    const { userPk } = user;
    const sessionId = await uid(24);

    const rowData = await db.query(SessionsQuery.CREATE_SESSION, [sessionId, ipAddress, userAgent, userPk]);
    console.log(rowData);
    const sessionData = rowData.parsedRows[0];

    return new Session(sessionData);
  }

  async delete() {

  }
 
  // async refresh() {
  //   const [sessionId] = await Promise.all([uid(24), db.query(SessionsQuery.DELETE_SESSION, [this.])]);
  // }
};

module.exports = Session;