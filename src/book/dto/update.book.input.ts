import { CreateBookInput } from "./create.book.input"
import { InputType, Field, PartialType, ID } from "@nestjs/graphql"

import { IsNotEmpty } from "class-validator"

@InputType()

// they not repect the user input bs yehe hum na CreateBookInput ki file ko extend karva daya ha 
export class UpdateBookInput extends PartialType(CreateBookInput){
    // Is file ko create karna ki waja yehe ha like ap jese Book ki ID ko update karha is ye file validate karaya gi 
    @Field(() => ID)
    @IsNotEmpty()
    id: string

    // ye id ko use karta ho hum field ko change karsaata ha 
}