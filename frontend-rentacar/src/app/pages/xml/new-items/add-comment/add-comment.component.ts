import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  validateForm!: FormGroup;

  private adId: any;
  public user: any;
  private simpleUser: any;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private commentService: CommentService) { }

  ngOnInit(): void {
    this.setupUser();
    this.adId = this.route.snapshot.params.id;
    this.validateForm = this.fb.group({
      content: [null, [Validators.required]],
    });
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 
  
  submitForm(): void {
    //VALIDATE
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if(this.user.userRole == 'SIMPLE_USER'){
      this.simpleUser = true;
    }else{
      this.simpleUser = false;
    }
    //REQUEST
    const body = {
      customerId: this.user.id,
      content: this.validateForm.value.content,
      adId: parseInt(this.adId),
      simpleUser: this.simpleUser
    }
    console.log(body);
    this.commentService.createComment(body).subscribe(data => {
      alert('Komentar poslat, ceka se odobrenje!');
      this.router.navigateByUrl(`dashboard/lists/reservations-history`);
    }, error => {
      alert('Error');
    })
  }
}
