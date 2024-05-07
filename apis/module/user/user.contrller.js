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
exports.deleteItem = exports.updateBulkUser = exports.updateUser = exports.login = exports.getAllUser = exports.getUser = exports.createBulkUser = exports.createUser = void 0;
const user_service_1 = require("./user.service");
const user_model_1 = __importDefault(require("./user.model"));
// ==================== create single user  ======================
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield (0, user_service_1.createUserToDB)(data);
        res.status(200).json({
            status: "success",
            data: result,
            message: "User created successfully",
        });
    }
    catch (err) {
        res.status(500).json({
            status: "error",
            message: `User creation failed ${err}`,
        });
    }
});
exports.createUser = createUser;
// ==================== create single bulk user  ======================
const createBulkUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        let totalUserCreated = 0;
        if (data === null || data === void 0 ? void 0 : data.length) {
            for (let i = 0; i < data.length; i++) {
                const password = "123456";
                const result = yield (0, user_service_1.createUserToDB)(Object.assign(Object.assign({}, data[i]), { password: password }));
                if (result) {
                    totalUserCreated++;
                }
            }
        }
        res.status(200).json({
            status: "success",
            data: `${totalUserCreated} users created`,
            message: "User created successfully",
        });
    }
    catch (err) {
        res.status(500).json({
            status: "error",
            message: `User creation failed ${err}`,
        });
    }
});
exports.createBulkUser = createBulkUser;
// ==================== get all ======================
// export const getUser = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { name, sort, id, phone, eventId } = req.query;
//   // Getting data ================
//   const result = await getUserFromDB(name, sort, id, phone, eventId);
//   // Check if folders exist
//   if (!result || result.length === 0) {
//     // Sending response ============
//     return res.status(404).json({
//       message: "No User found",
//       data: [],
//     });
//   }
//   res.status(200).json({
//     status: "success",
//     data: result,
//   });
// };
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, sort, id, phone, eventId, page, limit, eventUserId } = req.query;
        console.log(eventId, "ppppppppppppppppppppp");
        // Setting default values for page and limit
        const pageNumber = parseInt(page, 10) || 1;
        const pageSize = parseInt(limit, 10) || 10;
        // Calculate skip value for pagination
        const skip = (pageNumber - 1) * pageSize;
        // Getting data
        const result = yield (0, user_service_1.getUserFromDB)(name, sort, id, phone, eventId, skip, pageSize, eventUserId);
        // Check if users exist
        if (!result || result.length === 0) {
            // Sending response
            return res.status(404).json({
                message: "No User found",
                data: [],
            });
        }
        res.status(200).json({
            status: "success",
            data: result,
        });
    }
    catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to fetch user",
        });
    }
});
exports.getUser = getUser;
const getAllUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.query;
        // Getting data
        const result = yield (0, user_service_1.getAllUserFromDB)(email, password);
        // Check if folders exist
        if (!result || result.length === 0) {
            // Sending response
            return res.status(404).json({
                message: "No User found",
                data: [],
            });
        }
        res.status(200).json({
            status: "success",
            data: result,
        });
    }
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getAllUser = getAllUser;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // Getting data
        const user = yield user_model_1.default.findOne({ email });
        console.log(user, "pppppppppppppppppppp");
        // Check if folders exist
        if (!user) {
            // Sending response
            return res.status(404).json({
                message: "No User found",
                data: [],
            });
        }
        if (user.password !== password) {
            return res.status(404).json({
                message: "Password is incorrect",
                data: [],
            });
        }
        res.status(200).json({
            status: "success",
            data: user,
        });
    }
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.login = login;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedUser = yield (0, user_service_1.updateUserInDB)(id, data);
        res.status(200).json({
            status: "success",
            data: updatedUser,
        });
    }
    catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to update user",
        });
    }
});
exports.updateUser = updateUser;
const updateBulkUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const data = req.body;
        let totalUserUpdated = 0;
        if ((_a = data === null || data === void 0 ? void 0 : data.ids) === null || _a === void 0 ? void 0 : _a.length) {
            for (let i = 0; i < ((_b = data === null || data === void 0 ? void 0 : data.ids) === null || _b === void 0 ? void 0 : _b.length); i++) {
                const result = yield (0, user_service_1.updateUserInDB)(data === null || data === void 0 ? void 0 : data.ids[i], {
                    eventId: data === null || data === void 0 ? void 0 : data.eventId,
                });
                console.log(result);
                if (result) {
                    totalUserUpdated++;
                }
            }
        }
        res.status(200).json({
            status: "success",
            data: `${totalUserUpdated} user updated`,
        });
    }
    catch (error) {
        console.error("Error updating bulk user:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to update bulk user",
        });
    }
});
exports.updateBulkUser = updateBulkUser;
const deleteItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield (0, user_service_1.deleteFromDb)(id);
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
