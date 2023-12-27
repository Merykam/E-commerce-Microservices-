export class CreateUserDto {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    
    constructor(partial: Partial<CreateUserDto>) {
        Object.assign(this, partial);
    }
}
