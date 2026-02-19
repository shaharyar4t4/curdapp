import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookService } from '../book.service';
import { Book } from '../model/book.model';
import { CreateBookInput } from '../dto/create.book.input';
import { UpdateBookInput } from '../dto/update.book.input';

// this "@Resolver(()=> Book)" is show that this Resolve is specific for Book Model
@Resolver(() => Book)
export class BookResolver {
    constructor(private readonly bookService: BookService) { }

    // Query() --> is denoted the Get() in RestFul API
    @Query(() => [Book], { name: 'getAllBooks' })
    async findAll() {
        return this.bookService.findAll();
    }

    @Query(() => Book, { name: 'getBook' })
    async findOne(@Args('id', { type: () => String })
    id: string
    ) {
        return this.bookService.findOne(id);
    }

    // Mutation ---> is denoted the POST, UPDATE
    @Mutation(() => Book)
    async createBook(@Args('input') input: CreateBookInput){
        return this.bookService.createBookDetial(input);    
    }

    @Mutation(() => Book)
    async updateBook(@Args('input') input: UpdateBookInput){
        return this.bookService.updateBookDetial(input);    
    }

     @Mutation(() => Boolean)
    async removeBook(@Args('id', {type: () => String}) id: string ){
        return this.bookService.removeBookDetial(id);    
    }
}
