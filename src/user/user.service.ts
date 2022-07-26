import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserType } from './user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel:Model<UserDocument>) {}
     
    async findAll():Promise<User[]>{
        return this.userModel.find().exec();
    }
   async create(createUserDto:UserType):Promise<User> {
    const createUser = new this.userModel(createUserDto);
      return createUser.save();
   }
   async update(id:string,updateUserDto:UserType):Promise<User> {
    return this.userModel.findByIdAndUpdate(id,updateUserDto);
   }
   async delete(id:string) {
   return this.userModel.findByIdAndDelete(id);
   }
}
