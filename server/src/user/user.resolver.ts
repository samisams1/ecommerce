import { Resolver, Query, } from '@nestjs/graphql';
import { UserType } from './Dto/user.dto';
import { UserService } from './user.service';
import { User } from './user.shema';

@Resolver()
export class UserResolver {
  constructor(private productService: UserService) {}

  @Query(() => [UserType])
  async users(): Promise<User[]> {
    return this.productService.findAll();
  }
}
