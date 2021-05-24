"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const managerdb_1 = __importDefault(require("../config/managerdb"));
class UserController extends managerdb_1.default {
    getUsers(req, res) {
        const query = 'SELECT coduser, codrol, email, password FROM user';
        return UserController.executeQuery(query, req, res, 'SELECT');
    }
    createUser(req, res) {
        delete req.body.token;
        const query = 'INSERT INTO user SET ?';
        return UserController.executeQuery(query, req.body, res, 'INSERT-USER');
    }
    deleteUser(req, res) {
        if (isNaN(Number(req.params.codUser))) {
            return Promise.resolve(res.status(400).json({ 'message': 'Invalid cod' }));
        }
        const cod = Number(req.params.codUser);
        const query = 'DELETE FROM user WHERE coduser=?';
        return UserController.executeQuery(query, cod, res, 'DELETE');
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
