import { RoleType } from '../user.shema';
export declare class UserType {
    name: string;
    username: string;
    email: string;
    fullName?: string;
    password: string;
    avatar?: string;
    role: RoleType;
    currentHashedRefreshToken?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
