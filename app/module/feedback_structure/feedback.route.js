"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const feedback_controller_1 = require("./feedback.controller");
const router = express_1.default.Router();
router.post("/create", feedback_controller_1.createFeedback);
router.patch("/update/:id", feedback_controller_1.updateFeedback);
router.get("/list", feedback_controller_1.getFeedback);
router.delete("/delete/:id", feedback_controller_1.deleteItem);
exports.default = router;
