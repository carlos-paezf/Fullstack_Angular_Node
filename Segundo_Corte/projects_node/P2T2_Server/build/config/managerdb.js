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
// TODO: jsonWebToken para validaciones
class ManagerDB {
    //? Solo herencia, ejecución asincrona, retornando una promesa
    static runQuery(sql, parameters, res, type) {
        return __awaiter(this, void 0, void 0, function* () {
            connectiondb_1.default.query(sql, parameters, function (error, out) {
                if (!error) {
                    switch (type.toLowerCase()) {
                        case 'consult':
                            res.status(200).json(out);
                            break;
                        default:
                            res.status(400).json({ 'answer': 'Service not implemented' });
                            break;
                    }
                }
                console.log('Found a error: ', error);
                res.status(400).json({ 'answer': error });
            });
        });
    }
}
exports.default = ManagerDB;
