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
exports.UserType = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_shema_1 = require("../user.shema");
let UserType = class UserType {
};
exports.UserType = UserType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserType.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserType.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserType.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserType.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.HideField)(),
    __metadata("design:type", String)
], UserType.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserType.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true, defaultValue: user_shema_1.RoleType.USER }),
    __metadata("design:type", String)
], UserType.prototype, "role", void 0);
__decorate([
    (0, graphql_1.HideField)(),
    __metadata("design:type", String)
], UserType.prototype, "currentHashedRefreshToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime),
    __metadata("design:type", Date)
], UserType.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime),
    __metadata("design:type", Date)
], UserType.prototype, "updatedAt", void 0);
exports.UserType = UserType = __decorate([
    (0, graphql_1.ObjectType)('UserType'),
    (0, graphql_1.InputType)('UserInputType')
], UserType);
//# sourceMappingURL=user.dto.js.map