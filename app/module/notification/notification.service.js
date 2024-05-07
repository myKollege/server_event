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
exports.deleteFromDb = exports.updateNotificationInDB = exports.getNotificationFromDB = exports.createNotificationToDB = void 0;
const notification_model_1 = __importDefault(require("./notification.model"));
const createNotificationToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = new notification_model_1.default(payload);
        yield item.save();
        return item;
    }
    catch (error) {
        console.error("Error creating notification:", error);
        return null;
    }
});
exports.createNotificationToDB = createNotificationToDB;
const getNotificationFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield notification_model_1.default.find();
        return result;
    }
    catch (error) {
        console.error("Error fetching notifications:", error);
        return [];
    }
});
exports.getNotificationFromDB = getNotificationFromDB;
const updateNotificationInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedNotification = yield notification_model_1.default.findByIdAndUpdate(id, payload, {
            new: true,
        });
        return updatedNotification;
    }
    catch (error) {
        console.error("Error updating notification:", error);
        return null;
    }
});
exports.updateNotificationInDB = updateNotificationInDB;
const deleteFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedNotification = yield notification_model_1.default.findByIdAndDelete(id);
        return deletedNotification;
    }
    catch (error) {
        console.error("Error deleting notification:", error);
        return null;
    }
});
exports.deleteFromDb = deleteFromDb;
