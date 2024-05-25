"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const userSchema = new mongoose_1.Schema({
    eventUserId: { type: String },
    salutation: { type: String },
    firstName: { type: String },
    surname: { type: String },
    eventId: { type: String },
    eventName: { type: String },
    email: { type: String },
    phone: { type: String },
    companyName: { type: String },
    userGroupName: { type: String },
    password: { type: String },
    bio: { type: String },
    profileImageUrl: { type: String },
    dateOfBirth: { type: String },
    shopName: { type: String },
    mealPreference: { type: String },
    city: { type: String },
    state: { type: String },
    zone: { type: String },
    totalMembers: { type: Number },
    internationalHub: { type: String },
    panCardImageUrl: { type: String },
    passportImageUrl: { type: String },
    passportSizeImageUrl: { type: String },
    bookmarks: { type: [String] },
    gender: { type: String, enum: ["male", "female", "other"] },
    type: {
        type: String,
        enum: ["consumer", "admin", "employee"],
        default: "consumer",
    },
    passengerContact: { type: String },
    flightFrom: { type: String },
    passportNo: { type: String },
    dob: { type: String },
    arrivalFlightName: { type: String },
    arrivalFlightNo: { type: String },
    arrivalDate: { type: String },
    departureDate: { type: String },
    departureFlightName: { type: String },
    departureFlightNo: { type: String },
    airTicketUrl: { type: String },
    visaImageUrl: { type: String },
    insuranceUrl: { type: String },
    returnTicketUrl: { type: String },
    isCheckedTerms: { type: Boolean, default: false },
    userActivity: [
        {
            type: {
                type: String,
                enum: [
                    "TERMS_CHECKED",
                    "PASSWORD_CHANGE",
                    "PROFILE_UPDATE",
                    "SIGNUP",
                    "LOGOUT",
                    "LOGIN",
                ],
            },
            date: { type: Date },
            description: { type: String },
        },
    ],
    emergencyContactNumber: { type: String },
});
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
