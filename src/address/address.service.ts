import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddressType } from './address.dto';
import {Address, AddressDocument } from './address.schema';


@Injectable()
export class AddressService {
    constructor(@InjectModel(Address.name) private AddressModel:Model<AddressDocument>){}

    async findAll():Promise<Address[]> {
        return this.AddressModel.find().exec();
    } 
    async create(createAddressDto: AddressType):Promise<Address> {
       const createAddress = new this.AddressModel(createAddressDto);
        return createAddress.save();
    }
    async update(id: string, updateAddressDto: AddressType): Promise<Address> {
        return this.AddressModel.findByIdAndUpdate(id, updateAddressDto);
    }
    async delete(id: string): Promise<Address> {
        return this.AddressModel.findByIdAndDelete(id);
    }
} 