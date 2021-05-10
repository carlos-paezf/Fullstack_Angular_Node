"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rolcontroller_1 = __importDefault(require("../controllers/rolcontroller"));
class RolRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', rolcontroller_1.default.getRoles);
        this.router.post('/create', rolcontroller_1.default.createRol);
        this.router.delete('/:codRol', rolcontroller_1.default.deleteRol);
    }
}
const rolRoutes = new RolRoutes();
exports.default = rolRoutes.router;
