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
exports.deleteFromDb = exports.updateUserInDB = exports.getAllUserFromDB = exports.getUserFromDB = exports.createUserToDB = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const createUserToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = new user_model_1.default(payload);
        yield item.save();
        return item;
    }
    catch (error) {
        console.error("Error creating user:", error);
        return null;
    }
});
exports.createUserToDB = createUserToDB;
const getUserFromDB = (nameQuery, sortQuery, idQuery, phoneQuery, eventId, skip, limit, eventUserId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = {};
        console.log(eventId, "ooooooooooo --------------ooooooooooooo");
        // If name is provided, filter by name
        if (nameQuery) {
            query.name = { $regex: nameQuery, $options: "i" };
        }
        if (idQuery) {
            query._id = idQuery;
        }
        if (eventId) {
            query.eventId = eventId;
        }
        if (eventUserId) {
            query.eventUserId = eventUserId;
        }
        if (phoneQuery) {
            query.phone = phoneQuery;
        }
        // Sorting based on sortQuery
        let sort = { created_at: 1 }; // Default
        if (sortQuery && sortQuery.toLowerCase() === "desc") {
            sort = { created_at: -1 }; // descending order
        }
        // Apply pagination
        const result = yield user_model_1.default.find(query).sort(sort).skip(skip).limit(limit);
        return result;
    }
    catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
});
exports.getUserFromDB = getUserFromDB;
const getAllUserFromDB = (name, id, phone, eventId, eventUserId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = {};
        if (name) {
            query.name = { $regex: name, $options: "i" };
        }
        if (id) {
            query._id = id;
        }
        if (phone) {
            query.phone = phone;
        }
        if (eventId) {
            query.eventId = eventId;
        }
        if (eventUserId) {
            query.eventUserId = eventUserId;
        }
        const result = yield user_model_1.default.find().find(query);
        return result;
    }
    catch (error) {
        console.error("Error fetching users from the database:", error);
        throw error;
    }
});
exports.getAllUserFromDB = getAllUserFromDB;
const updateUserInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield user_model_1.default.findByIdAndUpdate(id, payload, {
            new: true,
        });
        return updatedUser;
    }
    catch (error) {
        console.error("Error updating user:", error);
        return null;
    }
});
exports.updateUserInDB = updateUserInDB;
const deleteFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield user_model_1.default.findByIdAndDelete(id);
        return deletedUser;
    }
    catch (error) {
        console.error("Error deleting user:", error);
        return null;
    }
});
exports.deleteFromDb = deleteFromDb;
