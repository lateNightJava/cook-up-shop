const { snakeToCamel } = require('./case');

exports.parseTableRows = rows => {
  const result = { tableRows: rows };

  result.parsedRows = rows.map(row => {
    const parsedRow = {};

    Object.keys(row).map(key => {
      const parsedKey = snakeToCamel(key);
      parsedRow[parsedKey] = row[key];
    });

    return parsedRow;
  });

  return result;
};