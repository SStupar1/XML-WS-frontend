import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-requests',
  templateUrl: './comment-requests.component.html',
  styleUrls: ['./comment-requests.component.css']
})
export class CommentRequestsComponent implements OnInit {

  public comments = [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.getAllCommentsByStatus();
  }

  private getAllCommentsByStatus(){
      let data = {
        status: "PENDING"
      }
      this.commentService.getAllCommentsByStatus(data).subscribe(response => {
        this.comments = response;
        console.log(this.comments);
      }, error => {
        alert("There is no comments on pending");
      })
  }

  
  approve(commentId){
    const body = {
      id: commentId
    }
    this.commentService.approveComment(body).subscribe(response => {
      location.reload();
    }, error => {
      alert("Error");
    })
  }

  deny(commentId){
    const body = {
      id: commentId
    }
    this.commentService.denyComment(body).subscribe(response => {
      location.reload();
    }, error => {
      alert("Error");
    })
  }
}
