import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Admin } from './admin.schema'; 

export enum Category {
    iphone = "Iphone",
    Samsung = "Samsung",
    infinix = "Infinix",
    Oppo = "Oppo",
    huawei = "huawei"
}

@Schema({ timestamps: true })
export class Product extends Document {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    price: string;

    @Prop()
    category: Category;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }) 
    adminId: Admin;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
