import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  Posts: any = [];

  post:{message:string} = {
    message:''
  }
  constructor(private postservice: PostService) {
    this.Posts = this.postservice.getPosts();

  }
  
  
  onAddPost(p:{message:string}) {
    this.post.message = '';
    this.postservice.addPost(p);
    this.Posts = this.postservice.getPosts();
    
    
  }

 

  ngOnInit(): void {
  }

}
