import { Injectable } from '@angular/core';
import { CLASSROOMS } from 'src/data/classroom';
import { Classroom, Room } from '../interfaces/classroom';

@Injectable({
  providedIn: 'root',
})
export class ClassroomService {
  constructor() {}

  getRooms(): Room[] {
    return CLASSROOMS.map(({ id, name }) => ({ id, name }));
  }

  getClassroom(idx: number): Classroom | undefined {
    return CLASSROOMS.find(({ id }) => id === idx);
  }
}
