import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { HttpClient } from '@angular/common/http';
import { Task } from '../services/task';
import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  private tasksUrl = 'http://localhost:5000/api/v1/tasks';
  
  tasks: Task[] = [];

  constructor(private taskService: TaskService,private titleService:Title) { 
    this.titleService.setTitle("Tasks");
  }

  getTasks() {
    this.taskService.getTasks()
      .subscribe( tasks => { this.tasks = tasks; console.log('new tasks');});
  }

  ngOnInit() {
    console.log('getTasks()',new Date().toISOString());
    this.getTasks();
  }

}
