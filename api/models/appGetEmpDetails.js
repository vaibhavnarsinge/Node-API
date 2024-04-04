const { login } = require("../controllers/appController");
const sql = require('mssql');
const config = require("../../config");


async function getempdetails(mode) {
    try {
        await sql.connect(config);
        var request = new sql.Request();
        request.input('mode', sql.Int, mode);
       
        const result = await request.execute('proc_RegisterationForm');
        console.log(result);

        return result;

    } catch (error) {
        console.error('Error caught:', error);
        throw error; 
    }
}

module.exports = getempdetails;