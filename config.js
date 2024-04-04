var sql = require("mssql")

const config = {
    user:"sa",
    password:'12345',
    server:"localhost",
    database:"EmpAngular",
    options: {
        encrypt: false,
        enableArithAbort: true,
        trustedConnection: true,
      },
      port: 1433,
};


module.exports = config;