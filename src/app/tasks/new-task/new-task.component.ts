import { Component,EventEmitter,Output,Input} from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string; 
  @Output() close=new EventEmitter();

  enteredTitle="";
  enteredSummary="";
  enteredDate="";

  constructor(private tasksService:TasksService){
  };


  onCancel(){
    this.close.emit();
  }
  onSubmit(){
    this.tasksService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      Date:this.enteredDate
    },this.userId);
    this.close.emit();
  }


}
