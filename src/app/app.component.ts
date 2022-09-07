import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoComponent } from './components/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('todo')
  todoComp!: TodoComponent

  title = 'day32';

  value: number = 3
  numList: number[] = []

  ngOnInit():void{
    for (let index = 0; index < 5; index++) {
      this.numList.push(Math.floor(Math.random()*100))
      
    }
  }

  saveTodo(){

    const todo = this.todoComp.getValues()
    console.info(">>>>>saveTodo: ", todo)
  }





  randomize(){
    this.value = Math.floor(Math.random() * 10)

    //Create new array
    const tmp:number[] = [...this.numList, this.value]

    //assign the new array to the binding
    this.numList = tmp
  }



}
