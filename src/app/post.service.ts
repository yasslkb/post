import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  Posts = [
    {},
   ];
  
  

  addPost(p:{message:string}) {
    this.Posts.push(p);
  }

  
getPosts(){
  return this.Posts;
}
  
  

  constructor() { }

}