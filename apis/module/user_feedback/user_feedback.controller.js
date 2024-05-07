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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateUserFeedbacks = exports.getUserFeedbacks = exports.createUserFeedbacks = void 0;
const user_feedback_service_1 = require("./user_feedback.service");
// ==================== create  ======================
const createUserFeedbacks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("here ======================");
        const data = req.body;
        const result = yield (0, user_feedback_service_1.createUserFeedbacksToDB)(data);
        res.status(200).json({
            status: "success",
            data: result,
            message: "UserFeedbacks created successfully",
        });
    }
    catch (err) {
        res.status(500).json({
            status: "error",
            message: `UserFeedbacks creation failed ${err}`,
        });
    }
});
exports.createUserFeedbacks = createUserFeedbacks;
// ==================== get all ======================
const getUserFeedbacks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, user_feedback_service_1.getUserFeedbacksFromDB)();
        res.status(200).json({
            status: "success",
            data: result,
        });
    }
    catch (error) {
        console.error("Error fetching user feedbacks:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to fetch user feedbacks",
        });
    }
});
exports.getUserFeedbacks = getUserFeedbacks;
const updateUserFeedbacks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedUserFeedbacks = yield (0, user_feedback_service_1.updateUserFeedbacksInDB)(id, data);
        res.status(200).json({
            status: "success",
            data: updatedUserFeedbacks,
        });
    }
    catch (error) {
        console.error("Error updating user feedbacks:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to update user feedbacks",
        });
    }
});
exports.updateUserFeedbacks = updateUserFeedbacks;
const deleteItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield (0, user_feedback_service_1.deleteFromDb)(id);
        if (!result) {
            return res.status(404).json({ error: "Item not found" });
        }
        res.status(200).json({ data: result, message: "deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting Folder:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.deleteItem = deleteItem;
