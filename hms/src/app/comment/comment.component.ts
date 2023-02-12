import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit{
  comments$=this.commentService.getComments();

  comment$=this.activeRoute.data.pipe(pluck('comments'))
  ngOnInit (): void {
    this.activeRoute.data.subscribe(data=>{
      data['comments'];
    })
  }
  constructor(private commentService:CommentService,
    private activeRoute:ActivatedRoute) {}
}
