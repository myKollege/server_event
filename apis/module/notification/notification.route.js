"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notification_controller_1 = require("./notification.controller");
const router = express_1.default.Router();
router.post("/create", notification_controller_1.createNotification);
router.put("/update/:id", notification_controller_1.updateNotification);
router.get("/list", notification_controller_1.getNotification);
router.delete("/delete/:id", notification_controller_1.deleteItem);
exports.default = router;
