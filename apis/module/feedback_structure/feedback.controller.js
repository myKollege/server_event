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
exports.deleteItem = exports.updateFeedback = exports.getFeedback = exports.createFeedback = void 0;
const feedback_service_1 = require("./feedback.service");
// ==================== create  ======================
const createFeedback = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("here ======================");
        const data = req.body;
        console.log(data);
        const result = yield (0, feedback_service_1.createFeedbackToDB)(data);
        res.status(200).json({
            status: "success",
            data: result,
            message: "Feedback created successfully",
        });
    }
    catch (err) {
        res.status(500).json({
            status: "error",
            message: `Feedback creation failed ${err}`,
        });
    }
});
exports.createFeedback = createFeedback;
// ==================== get all ======================
const getFeedback = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, feedback_service_1.getFeedbackFromDB)();
        res.status(200).json({
            status: "success",
            data: result,
        });
    }
    catch (error) {
        console.error("Error fetching feedback:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to fetch feedback",
        });
    }
});
exports.getFeedback = getFeedback;
//================ update ============================
const updateFeedback = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedFeedback = yield (0, feedback_service_1.updateFeedbackInDB)(id, data);
        res.status(200).json({
            status: "success",
            data: updatedFeedback,
        });
    }
    catch (error) {
        console.error("Error updating feedback:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to update feedback",
        });
    }
});
exports.updateFeedback = updateFeedback;
const deleteItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield (0, feedback_service_1.deleteFromDb)(id);
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
