const { login } = require("../controllers/appController");
const sql = require('mssql');
const config = require("../../config");


async function loginfunction(emailid, password, mode) {
    try {
        await sql.connect(config);
        var request = new sql.Request();
        request.input('mail', sql.VarChar(500), emailid);
        request.input('password', sql.VarChar(500), password);
        request.input('mode', sql.Int, mode);

        const result = await request.execute('proc_RegisterationForm');
        console.log(result);
        return result.recordset[0];
    } catch (error) {
        console.error('Error caught:', error);
        throw error; // Rethrow the error to handle it at the caller level
    }
}
module.exports = loginfunction;

