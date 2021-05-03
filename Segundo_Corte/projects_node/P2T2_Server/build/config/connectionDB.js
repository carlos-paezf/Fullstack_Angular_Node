"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configurationDB_1 = __importDefault(require("./configurationDB"));
const mysql_1 = __importDefault(require("mysql"));
const pool = mysql_1.default.createPool(configurationDB_1.default.database);
exports.default = pool;
pool.getConnection(function (error, connection) {
    if (error) {
        console.log('El cod del error es: ', error.code);
    }
    else {
        if (connection) {
            connection.release();
        }
        console.log('Conexion establecida con: ', configurationDB_1.default.database.database);
    }
});
