import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private helper: HttpClient;
  //constructor(private helper: HttpClient) 
  constructor() 
  {
    console.log("Data Service Object Created");
  }

  Select()
  {
    return  this.helper.get("http://localhost:9898/");
  }

  SelectByNo(No)
  {
    return  this.helper.get("http://localhost:9898/emps/" + No );
  }

  Insert(student)
  {
  return  this.helper.post("http://localhost:9898/emps",student);
  }

  Update(student)
  {
   return this.helper.put("http://localhost:9898/emps/" + student.No ,student);
  }

  Delete(No)
  {
    return  this.helper.delete("http://localhost:9898/emps/" + No );
  }
}
