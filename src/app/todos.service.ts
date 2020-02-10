import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TodosService {
  getTodos() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }

  constructor(private http: HttpClient) {}
}
