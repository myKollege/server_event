"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
//============ api routes ====================
const notification_route_1 = __importDefault(
  require("./apis/module/notification/notification.route")
);
const user_route_1 = __importDefault(require("./apis/module/user/user.route"));
const event_route_1 = __importDefault(
  require("./apis/module/event/event.route")
);
const feedback_route_1 = __importDefault(
  require("./apis/module/feedback_structure/feedback.route")
);
const user_feedback_route_1 = __importDefault(
  require("./apis/module/user_feedback/user_feedback.route")
);
dotenv_1.default.config();
const app = (0, express_1.default)();
//middle ware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//routes
app.use("/api/v1/user", user_route_1.default);
app.use("/api/v1/event", event_route_1.default);
app.use("/api/v1/notification", notification_route_1.default);
app.use("/api/v1/feedback", feedback_route_1.default);
app.use("/api/v1/user_feedback", user_feedback_route_1.default);
exports.default = app;
