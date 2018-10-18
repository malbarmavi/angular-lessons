import { Injectable } from "@angular/core";

@Injectable()
export class LessonsService {

    public getLessonData() {
        return [
            { id: 0, title: 'Lesson 1' },
            { id: 1, title: 'Lesson 2' },
            { id: 2, title: 'Lesson 3' },
            { id: 3, title: 'Lesson 4' },
            { id: 4, title: 'Lesson 5' },
        ]
    }
}