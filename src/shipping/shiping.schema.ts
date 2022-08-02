import { Prop, Schema } from "@nestjs/mongoose";


@Schema()
export class Shiping {
    @Prop()
    type:string;
    @Prop()
    price:number;
    @Prop()
    status:string;
    @Prop({default:Date.now})
    createdAt:Date;
}