"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectiondb_1 = __importDefault(require("../config/connectiondb"));
class RolController extends connectiondb_1.default {
    getRoles(req, res) {
        const query = 'SELECT codrol, namerol FROM rol';
        return RolController.executeQuery(query, req, res, 'SELECT');
    }
    createRol(req, res) {
        const query = 'INSERT INTO rol SET ?';
        return RolController.executeQuery(query, req.body, res, 'INSERT');
    }
    deleteRol(req, res) {
        if (!isNaN(Number(req.params.codRol))) {
            const cod = Number(req.params.codRol);
            const query = 'DELETE FROM rol WHERE codrol=?';
            return RolController.executeQuery(query, cod, res, 'DELETE');
        }
        return Promise.resolve(res.status(400).json({ 'message': 'Invalid cod' }));
    }
    updateRol(req, res) {
        if (!isNaN(Number(req.params.codRol))) {
            const cod = Number(req.params.codRol);
            delete req.body.codrol;
            const query = 'UPDATE rol SET ? WHERE codrol=?';
            return RolController.executeQuery(query, cod, res, 'DELETE');
        }
        return Promise.resolve(res.status(400).json({ 'message': 'Invalid cod' }));
    }
}
const rolController = new RolController();
exports.default = rolController;
