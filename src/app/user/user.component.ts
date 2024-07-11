import { Component,EventEmitter,Input,output,Output } from '@angular/core';
import { User } from './user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!:User;
  @Input({required:true}) selected!:boolean;
  @Output() select =new EventEmitter;
  get imgPath(){
    return "assets/users/" + this.user.avatar;
  };
  Onselected(){
    this.select.emit(this.user.id);

  }
  
  

}
