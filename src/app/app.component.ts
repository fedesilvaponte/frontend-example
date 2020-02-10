import { Component } from "@angular/core";
import { TodosService } from "./todos.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  todos: object;
  title = "frontend-example";
  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todosService.getTodos().subscribe(data => {
      this.todos = data;
    });
  }
}
