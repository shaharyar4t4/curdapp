import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {Document} from "mongoose";
import { ObjectType, Field, ID } from "@nestjs/graphql";

@Schema()
// this is comes from the object but tread as a object
@ObjectType()
export class Book extends Document{
  
    @Field(() => ID)
    // the declare word is show the ID is only for Readonly
    // declare readonly_id: string;
    declare readonly id: string;

    @Prop({required: true})
    @Field()
    title: string;

    @Prop()
    @Field({nullable: true})
    description?: string;

    @Prop({required: true})
    @Field()
    author: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);