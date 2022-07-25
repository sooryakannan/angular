import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = "myApp";
  options = ["angular","nestjs","nodejs"];

  constructor() { }

  ngOnInit(): void {
  }

}
