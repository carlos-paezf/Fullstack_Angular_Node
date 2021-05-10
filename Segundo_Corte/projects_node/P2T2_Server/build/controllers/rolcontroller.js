"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const managerdb_1 = __importDefault(require("../config/managerdb"));
class RolController extends managerdb_1.default {
    getRoles(req, res) {
        const query = 'SELECT codrol, namerol FROM rol';
        return RolController.executeQuery(query, req, res, 'SELECT');
    }
    createRol(req, res) {
        console.log(req.body);
        const query = 'INSERT INTO rol SET ?';
        return RolController.executeQuery(query, req.body, res, 'INSERT');
    }
    deleteRol(req, res) {
        if (isNaN(Number(req.params.codRol))) {
            return Promise.resolve(res.status(400).json({ 'message': 'Invalid cod' }));
        }
        const cod = Number(req.params.codRol);
        const query = 'DELETE FROM rol WHERE codrol=?';
        return RolController.executeQuery(query, cod, res, 'DELETE');
    }
}
const rolController = new RolController;
exports.default = rolController;
