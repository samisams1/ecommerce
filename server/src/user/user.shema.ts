import { registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum RoleType {
	USER = 'USER',
	ADMIN = 'ADMIN',
}

registerEnumType(RoleType, {
	name: 'RoleType',
	description: 'User role',
});

@Schema()
export class User {

    @Prop({ type: String, unique: true })
	username: string;

	@Prop({ type: String, unique: true })
	
	email: string;

	@Prop({ type: String, nullable: true })
	fullName?: string;

	@Prop({ type: String, select: false })
	password: string;

	@Prop({ required: false })
	avatar?: string;

   @Prop({ type: String, enum: Object.values(RoleType), default: RoleType.USER })
	role: RoleType; 

	@Prop({ type: String, select: false, required: false })
	
	currentHashedRefreshToken?: string;

	@Prop({ type: Date, default: Date.now })
	createdAt?: Date;

	@Prop({ type: Date, default: Date.now })
	updatedAt?: Date;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);


