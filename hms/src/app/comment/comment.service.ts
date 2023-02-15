import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Comments } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService implements OnInit{

  constructor(private http:HttpClient) { }

  getComments(){
    return this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/comments');
  }

  ngOnInit(): void {
      
  }
}
