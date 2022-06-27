import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassroomService } from 'src/app/services/classroom.service';
import { Classroom } from 'src/app/interfaces/classroom';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  classroom?: Classroom;

  constructor(
    private route: ActivatedRoute,
    private classroomService: ClassroomService
  ) {}

  ngOnInit(): void {
    this.signal();
  }

  ngDoCheck(): void {
    this.signal();
  }

  private signal(): void {
    const idx = Number(this.route.snapshot.paramMap.get('roomId'));
    this.classroom = this.classroomService.getClassroom(idx);
  }
}
