"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configurationdb_1 = __importDefault(require("./configurationdb"));
const pg_1 = require("pg");
const pool = new pg_1.Pool(configurationdb_1.default.database);
class ManagerDB {
    static executeQuery(sql, parameters, res, type) {
        return __awaiter(this, void 0, void 0, function* () {
            pool.connect((error, connection) => {
                if (error) {
                    console.log('Found an Error <-->: ', error.message);
                }
                else {
                    if (connection) {
                        connection.release();
                    }
                    console.log('Conexión establecida con: ', configurationdb_1.default.database.database);
                }
            });
            pool.query(sql, [parameters], function (error, out) {
                if (error) {
                    console.log('Found an Error: ', error.message);
                }
                else {
                    switch (type.toUpperCase()) {
                        case 'SELECT':
                            res.status(200).json(out);
                            break;
                        case 'INSERT':
                            res.status(200).json({ 'message': 'Register created', 'id': out.oid });
                            break;
                        case 'DELETE':
                            if (out.rowCount > 0)
                                res.status(200).json({ 'message': 'Record deleted', 'affected rows': out.rowCount });
                            else
                                res.status(400).json({ 'message': 'Rol not found' });
                            break;
                        case 'UPDATE':
                            if (out.rowCount > 0)
                                res.status(200).json({ 'message': 'Records updated', 'affected rows': out.rowCount });
                            else
                                res.status(400).json({ 'message': 'Rol not found' });
                            break;
                        default:
                            res.status(400).json({ 'answer': 'Service not implemented <--' });
                            break;
                    }
                }
            });
        });
    }
}
exports.default = ManagerDB;
