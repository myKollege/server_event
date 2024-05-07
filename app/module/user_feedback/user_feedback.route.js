"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_feedback_controller_1 = require("./user_feedback.controller");
const router = express_1.default.Router();
router.post("/create", user_feedback_controller_1.createUserFeedbacks);
router.put("/update/:id", user_feedback_controller_1.updateUserFeedbacks);
router.get("/list", user_feedback_controller_1.getUserFeedbacks);
router.delete("/delete/:id", user_feedback_controller_1.deleteItem);
exports.default = router;
