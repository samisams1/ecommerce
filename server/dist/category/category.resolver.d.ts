import { CategoryService } from './category.service';
import { Category } from './category.shema';
import { CategoryType } from './dto/category.dto';
export declare class CategoryResolver {
    private categoryService;
    constructor(categoryService: CategoryService);
    categories(): Promise<Category[]>;
    category(id: number): Promise<Category>;
    createCategory(category: CategoryType): Promise<Category>;
}
