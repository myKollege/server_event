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
exports.deleteItem = exports.updateNotification = exports.getNotification = exports.createNotification = void 0;
const notification_service_1 = require("./notification.service");
// ==================== create  ======================
const createNotification = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("here ======================");
        const data = req.body;
        const result = yield (0, notification_service_1.createNotificationToDB)(data);
        res.status(200).json({
            status: "success",
            data: result,
            message: "Notification created successfully",
        });
    }
    catch (err) {
        res.status(500).json({
            status: "error",
            message: `Notification creation failed ${err}`,
        });
    }
});
exports.createNotification = createNotification;
// ==================== get all ======================
const getNotification = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, notification_service_1.getNotificationFromDB)();
        res.status(200).json({
            status: "success",
            data: result,
        });
    }
    catch (error) {
        console.error("Error fetching notification:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to fetch notification",
        });
    }
});
exports.getNotification = getNotification;
const updateNotification = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedNotification = yield (0, notification_service_1.updateNotificationInDB)(id, data);
        res.status(200).json({
            status: "success",
            data: updatedNotification,
        });
    }
    catch (error) {
        console.error("Error updating notification:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to update notification",
        });
    }
});
exports.updateNotification = updateNotification;
const deleteItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield (0, notification_service_1.deleteFromDb)(id);
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
