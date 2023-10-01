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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const base_type_1 = require("./base.type");
const base_service_1 = require("./base.service");
let BaseResolver = class BaseResolver {
    constructor(service) {
        this.service = service;
    }
    async getAll() {
        return this.service.findAll();
    }
    async getById(id) {
        return this.service.findById(id);
    }
    async create(createDto) {
        return this.service.create(createDto);
    }
    async update(id, updateDto) {
        return this.service.update(id, updateDto);
    }
    async delete(id) {
        return this.service.delete(id);
    }
};
exports.BaseResolver = BaseResolver;
__decorate([
    (0, graphql_1.Query)(() => [base_type_1.BaseType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseResolver.prototype, "getAll", null);
__decorate([
    (0, graphql_1.Query)(() => base_type_1.BaseType),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BaseResolver.prototype, "getById", null);
__decorate([
    (0, graphql_1.Mutation)(() => base_type_1.BaseType),
    __param(0, (0, graphql_1.Args)('createDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BaseResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Mutation)(() => base_type_1.BaseType),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('updateDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BaseResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)(() => base_type_1.BaseType),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BaseResolver.prototype, "delete", null);
exports.BaseResolver = BaseResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [base_service_1.BaseService])
], BaseResolver);
//# sourceMappingURL=base.resolver.js.map