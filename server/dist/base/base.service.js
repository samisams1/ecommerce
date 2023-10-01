"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
class BaseService {
    constructor(model) {
        this.model = model;
    }
    getModel() {
        return this.model;
    }
    async findAll() {
        return this.getModel().find().exec();
    }
    async findById(id) {
        return this.getModel().findById(id).exec();
    }
    async create(createDto) {
        return this.getModel().create(createDto);
    }
    async update(id, updateDto) {
        return this.getModel().findByIdAndUpdate(id, updateDto, { new: true }).exec();
    }
    async delete(id) {
        return this.getModel().findByIdAndDelete(id).exec();
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map