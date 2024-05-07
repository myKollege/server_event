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
exports.deleteFromDb = exports.updateUserFeedbacksInDB = exports.getUserFeedbacksFromDB = exports.createUserFeedbacksToDB = void 0;
const user_feedback_model_1 = __importDefault(require("./user_feedback.model"));
const createUserFeedbacksToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = new user_feedback_model_1.default(payload);
        yield item.save();
        return item;
    }
    catch (error) {
        console.error("Error creating user feedbacks:", error);
        return null;
    }
});
exports.createUserFeedbacksToDB = createUserFeedbacksToDB;
const getUserFeedbacksFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_feedback_model_1.default.find();
        return result;
    }
    catch (error) {
        console.error("Error fetching user feedbacks:", error);
        return [];
    }
});
exports.getUserFeedbacksFromDB = getUserFeedbacksFromDB;
const updateUserFeedbacksInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUserFeedbacks = yield user_feedback_model_1.default.findByIdAndUpdate(id, payload, {
            new: true,
        });
        return updatedUserFeedbacks;
    }
    catch (error) {
        console.error("Error updating user feedbacks:", error);
        return null;
    }
});
exports.updateUserFeedbacksInDB = updateUserFeedbacksInDB;
const deleteFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUserFeedbacks = yield user_feedback_model_1.default.findByIdAndDelete(id);
        return deletedUserFeedbacks;
    }
    catch (error) {
        console.error("Error deleting user feedbacks:", error);
        return null;
    }
});
exports.deleteFromDb = deleteFromDb;
