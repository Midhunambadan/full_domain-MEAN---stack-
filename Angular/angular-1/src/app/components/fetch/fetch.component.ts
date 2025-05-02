import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fetch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fetch.component.html',
  styleUrl: './fetch.component.css'
})
export class FetchComponent {

  constructor(private http:HttpClient){}

  data!:any
  fetchData(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res:any)=>{
      console.log(res)
      this.data=res
    })
  }
}
