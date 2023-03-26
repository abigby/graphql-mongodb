import { Resolver, Query, Mutation } from "@nestjs/graphql";
import { LessonType } from './lesson.type';

@Resolver(of => LessonType)
export class LessonResolver {
    @Query(returns => LessonType)
    public lesson(): LessonType {
        return {
            id: 'aasfasfasdf',
            name: 'Physics Class',
            startDate: (new Date()).toISOString(),
            endDate: (new Date()).toISOString(),
        }
    }
    
    @Mutation(returns => LessonType)
    public createLesson() {
        
    }
}


// A Resolver can be thought of as a controller in RESTFUL Services which handles incoming responses

// Queries are used to retrieve data

// Mutations are used to create new data or change existing data