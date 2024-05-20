"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActivityType;
(function (ActivityType) {
    ActivityType[ActivityType["LOGIN"] = 0] = "LOGIN";
    ActivityType[ActivityType["LOGOUT"] = 1] = "LOGOUT";
    ActivityType[ActivityType["SIGNUP"] = 2] = "SIGNUP";
    ActivityType[ActivityType["PROFILE_UPDATE"] = 3] = "PROFILE_UPDATE";
    ActivityType[ActivityType["PASSWORD_CHANGE"] = 4] = "PASSWORD_CHANGE";
    ActivityType[ActivityType["TERMS_CHECKED"] = 5] = "TERMS_CHECKED";
})(ActivityType || (ActivityType = {}));
