"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectiondb_1 = __importDefault(require("../config/connectiondb"));
class UserController extends connectiondb_1.default {
    getUsers(req, res) {
        const query = 'SELECT coduser, codrol, email, password FROM user';
        return UserController.executeQuery(query, req, res, 'SELECT');
    }
    createUser(req, res) {
        const query = 'INSERT INTO user SET ?';
        return UserController.executeQuery(query, req.body, res, 'INSERT');
    }
    deleteUser(req, res) {
        if (!isNaN(Number(req.params.codUser))) {
            const cod = Number(req.params.codUser);
            const query = 'DELETE FROM user WHERE coduser=?';
            return UserController.executeQuery(query, cod, res, 'DELETE');
        }
        return Promise.resolve(res.status(400).json({ 'message': 'Invalid cod' }));
    }
    updateUser(req, res) {
        if (!isNaN(Number(req.params.codUser))) {
            const cod = Number(req.params.codUser);
            delete req.body.coduser;
            const query = 'UPDATE user SET ? WHERE codUser=?';
            const parameters = [req.body, cod];
            return UserController.executeQuery(query, parameters, res, 'UPDATE');
        }
        return Promise.resolve(res.status(400).json({ 'message': 'Invalid cod' }));
    }
}
const userController = new UserController();
exports.default = userController;
