import { UserService } from './user.service';
import { User } from './user.shema';
export declare class UserResolver {
    private productService;
    constructor(productService: UserService);
    users(): Promise<User[]>;
}
