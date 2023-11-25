"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var routes_1 = require("./routes");
var AppError_1 = require("./errors/AppError");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_json_1 = __importDefault(require("./swagger.json"));
var cors = require("cors");
require("dotenv").config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(routes_1.routes);
app.use(function (err, req, res, next) {
    if (err instanceof AppError_1.AppError) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    return res.status(500).json({
        status: "Error",
        message: "Internal server error: ".concat(err.message)
    });
});
var port = 3001;
app.listen(port, function () {
    console.log("Server running on port ".concat(port));
});
//# sourceMappingURL=server.js.map