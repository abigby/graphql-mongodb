import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType('Lesson') // let GraphQL become aware of this as a type
export class LessonType {
    
    @Field(type => ID)
    public id: string;
    @Field()
    public name: string;
    @Field()
    public startDate: string;
    @Field()
    public endDate: string;
}

// GraphQL specifics