type state = 'approved' | 'disapproved';
type room = 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
type shift = 'morning' | 'afternoon ';
type lastNames = [string, string];

interface Student {
  id: number;
  names: string[];
  lastNames: lastNames;
  classroom: room;
  state: state;
  shift: shift;
}

export interface Room {
  id: number;
  name: room;
}

export interface Classroom {
  id: number;
  name: room;
  students: Student[];
}
