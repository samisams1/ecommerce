"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = exports.Order = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_shema_1 = require("../user/user.shema");
let Order = class Order {
};
exports.Order = Order;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Order.prototype, "paymentMethod", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, default: 0.0 }),
    __metadata("design:type", Number)
], Order.prototype, "taxPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, default: 0.0 }),
    __metadata("design:type", Number)
], Order.prototype, "shippingPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, default: 0.0 }),
    __metadata("design:type", Number)
], Order.prototype, "totalPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true, default: false }),
    __metadata("design:type", Boolean)
], Order.prototype, "isPaid", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: false }),
    __metadata("design:type", Date)
], Order.prototype, "paidAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true, default: false }),
    __metadata("design:type", Boolean)
], Order.prototype, "isDelivered", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: false }),
    __metadata("design:type", Date)
], Order.prototype, "deliveredAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: user_shema_1.User.name, required: true }),
    __metadata("design:type", user_shema_1.User)
], Order.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: Date.now }),
    __metadata("design:type", Date)
], Order.prototype, "createdAt", void 0);
exports.Order = Order = __decorate([
    (0, mongoose_1.Schema)()
], Order);
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
//# sourceMappingURL=order.schema.js.map