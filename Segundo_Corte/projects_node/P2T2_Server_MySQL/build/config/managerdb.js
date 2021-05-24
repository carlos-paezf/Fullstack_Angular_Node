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
const connectiondb_1 = __importDefault(require("./connectiondb"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class ManagerDB {
    //? Solo herencia, ejecución asincrona, retornando una promesa
    static executeQuery(sql, parameters, res, type) {
        return __awaiter(this, void 0, void 0, function* () {
            connectiondb_1.default.query(sql, parameters, function (error, out) {
                if (error) {
                    switch (error.code) {
                        case 'ER_PARSE_ERROR':
                            console.log('Wrong service query', error);
                            res.status(400).json({ 'answer': 'Wrong service query' });
                            break;
                        default:
                            console.log('Found an Error', error);
                            // La siguiente linea es preferible mantenerla oculta
                            res.status(400).json({ 'error': error.code });
                            break;
                    }
                }
                else {
                    switch (type.toUpperCase()) {
                        case 'SELECT':
                            res.status(200).json(out);
                            break;
                        case 'INSERT':
                            res.status(200).json({ 'message': 'Register created', 'id': out.insertId });
                            break;
                        case 'DELETE':
                            out.affectedRows > 0
                                ? res.status(200).json({ 'message': 'Record deleted', 'affected rows': out.affectedRows })
                                : res.status(400).json({ 'message': 'Rol not found' });
                            break;
                        case 'UPDATE':
                            out.affectedRows > 0
                                ? res.status(200).json({ 'message': 'Records updated', 'affected rows': out.affectedRows })
                                : res.status(400).json({ 'message': 'Rol not found' });
                            break;
                        case 'INSERT-USER':
                            const token = jsonwebtoken_1.default.sign({ 'id': out.indertId, 'email': parameters.email }, 'privatekey');
                            res.status(200).json({ 'token': token });
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
