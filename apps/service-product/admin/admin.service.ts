import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import {Admin} from '../src/product/schemas/admin.schema'
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AdminService {
  constructor(
        @InjectModel(Admin.name)
        private adminModel : mongoose.Model<Admin>
    ){}

 async create(admin: Admin) : Promise<Admin>{
    const res = await this.adminModel.create(admin)
    return res;
    
  }

  async findAdmin(admin1:String){
    const findAdmin = await this.adminModel.findOne({name:admin1});
    console.log(findAdmin);
    return findAdmin;
  }


  findAll() {
    return `This action returns all admin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  // update(id: number, updateAdminDto: UpdateAdminDto) {
  //   return `This action updates a #${id} admin`;
  // }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
