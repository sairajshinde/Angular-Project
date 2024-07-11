import { Component,input,Input,Output,EventEmitter } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:Task;
  @Output() complete=new EventEmitter<string>();

  constructor(private tasksService:TasksService){

  }

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }


}
