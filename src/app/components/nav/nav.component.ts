import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/interfaces/classroom';
import { ClassroomService } from 'src/app/services/classroom.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  rooms!: Room[];

  constructor(private classroomService: ClassroomService) {}

  ngOnInit(): void {
    this.getRooms();
  }

  private getRooms(): void {
    this.rooms = this.classroomService.getRooms();
  }
}
