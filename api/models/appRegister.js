const { login } = require("../controllers/appController");
const sql = require('mssql');
const config = require("../../config");

async function registerfunction(data,mode){
    try {
        await sql.connect(config);
        var request = new sql.Request();
        request.input('name', sql.VarChar(500), data.name);
        request.input('phone', sql.Int, data.phone);
        request.input('mail', sql.VarChar(500), data.email);
        request.input('password', sql.VarChar(500), data.password);
        request.input('mode', sql.Int, mode);

        const result = await request.execute('proc_RegisterationForm');
        console.log(result);
        return result;
        } 
        catch (error) {
        console.error('Error caught:', error);
        throw error; // Rethrow the error to handle it at the caller level
    }

}
module.exports = registerfunction;
