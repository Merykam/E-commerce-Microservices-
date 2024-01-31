import { Admin } from "../schemas/admin.schema";
import { Category } from "../schemas/product.schema";

export class CreateProductDto {
    readonly name : string;
    readonly description : string;
    readonly price : number;
    readonly category : Category;
    // readonly adminId: string;

}