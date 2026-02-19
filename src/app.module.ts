import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverAsyncConfig, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloBaseDriver } from '@nestjs/apollo/dist/drivers/apollo-base.driver';
import { join } from 'path';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    // the graphql is inital add the on app.module.ts
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // the below line is help auto create the file on schema.gql no need to create manually
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema:true,
      // the below is playground: true is provide the plateform where you test the queries... no need the POSTMAN
      playground:true
    }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
