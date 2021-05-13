"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configurationdb_1 = __importDefault(require("./configurationdb"));
const mysql_1 = __importDefault(require("mysql"));
const pool = mysql_1.default.createPool(configurationdb_1.default.database);
exports.default = pool;
pool.getConnection(function (error, connection) {
    if (error) {
        switch (error.code) {
            case 'ER_BAD_DB_ERROR':
                console.log('The database not exists ', configurationdb_1.default.database.database, ' ', error.code);
                break;
            case 'ER_ACCESS_DENIED_ERROR':
                console.log('The username or password is incorrect ', error.code);
                break;
            case 'ENOTFOUND':
                console.log('Server Error ', error.code);
                break;
            default:
                console.log('Found an Error', error);
                break;
        }
    }
    else {
        if (connection) {
            connection.release();
        }
        console.log('Conexion establecida con: ', configurationdb_1.default.database.database);
    }
});
