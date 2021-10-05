const { snakeToCamel } = require('./case');

exports.tableRowsToObjRows = rows => {
  return rows.map(row => {
    const parsedRow = {};

    Object.keys(row).map(key => {
      const parsedKey = snakeToCamel(key);
      parsedRow[parsedKey] = row[key];
    });

    return parsedRow;
  });
};