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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFromDb = exports.updateFeedbackInDB = exports.getFeedbackFromDB = exports.createFeedbackToDB = void 0;
const feedback_model_1 = __importDefault(require("./feedback.model"));
const createFeedbackToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = new feedback_model_1.default(payload);
        yield item.save();
        return item;
    }
    catch (error) {
        console.error("Error creating feedback:", error);
        return null;
    }
});
exports.createFeedbackToDB = createFeedbackToDB;
const getFeedbackFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield feedback_model_1.default.find();
        return result;
    }
    catch (error) {
        console.error("Error fetching feedback:", error);
        return [];
    }
});
exports.getFeedbackFromDB = getFeedbackFromDB;
const updateFeedbackInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedFeedback = yield feedback_model_1.default.findByIdAndUpdate(id, payload, {
            new: true,
        });
        return updatedFeedback;
    }
    catch (error) {
        console.error("Error updating feedback:", error);
        return null;
    }
});
exports.updateFeedbackInDB = updateFeedbackInDB;
const deleteFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedFeedback = yield feedback_model_1.default.findByIdAndDelete(id);
        return deletedFeedback;
    }
    catch (error) {
        console.error("Error deleting feedback:", error);
        return null;
    }
});
exports.deleteFromDb = deleteFromDb;
