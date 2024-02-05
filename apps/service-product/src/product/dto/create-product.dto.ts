import { Admin } from "../schemas/admin.schema";
import { Category } from "../schemas/product.schema";
import {IsNotEmpty} from "class-validator"

export class CreateProductDto {
    @IsNotEmpty()
     name : string;

    @IsNotEmpty()
     description : string;

    @IsNotEmpty()
     price : number;
 
    @IsNotEmpty()
     category : Category;
    //  adminId: string;

}