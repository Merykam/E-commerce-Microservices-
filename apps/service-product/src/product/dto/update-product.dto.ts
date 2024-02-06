import { Category } from "../schemas/product.schema";
// import {IsNotEmpty} from "class-validator"

export class UpdateProductDto {
    // @IsNotEmpty()
    readonly name : string;

    // @IsNotEmpty()
    readonly description : string;

    // @IsNotEmpty()
    readonly price : number;

    // @IsNotEmpty()
    readonly category : Category;

}