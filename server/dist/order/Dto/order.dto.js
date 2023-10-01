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
exports.OrderType = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_shema_1 = require("../../user/user.shema");
let OrderType = class OrderType {
};
exports.OrderType = OrderType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrderType.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], OrderType.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], OrderType.prototype, "paymentMethod", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], OrderType.prototype, "taxPrice", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], OrderType.prototype, "shippingPrice", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], OrderType.prototype, "totalPrice", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], OrderType.prototype, "isPaid", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime, { nullable: true }),
    __metadata("design:type", Date)
], OrderType.prototype, "paidAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], OrderType.prototype, "isDelivered", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime, { nullable: true }),
    __metadata("design:type", Date)
], OrderType.prototype, "deliveredAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_shema_1.User),
    __metadata("design:type", user_shema_1.User)
], OrderType.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime),
    __metadata("design:type", Date)
], OrderType.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime),
    __metadata("design:type", Date)
], OrderType.prototype, "updatedAt", void 0);
exports.OrderType = OrderType = __decorate([
    (0, graphql_1.ObjectType)('OrderType'),
    (0, graphql_1.InputType)('OrderInputType')
], OrderType);
//# sourceMappingURL=order.dto.js.map