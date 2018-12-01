import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  
  //Get Data
    getPostsData(): Observable<any> {
      return this.http.get("http://localhost:8081/api/posts");
    }

  //Add Post to the Server
  addPost(title: string, content: string, level: string, background: string, Cclass: string, allignment:string): Observable<any> {
    const post: Post = {title: title, content: content, level: level,background:background,Cclass: Cclass, allignment: allignment};
    return this.http.post("http://localhost:8081/api/posts",post);
  }

  //Delete Post from Server
  deletePost(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/posts/"+id);
  }

  //Return Post
  getPost(id:String): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts/"+id);
  }

  //Edit Posts
  updatePost(id:String, title: string, content: string, level: string, background: string, Cclass: string, allignment: string): Observable<any> {
    const post: Post = {title: title, content: content, level: level,background: background,Cclass: Cclass, allignment: allignment};
  return this.http.put("http://localhost:8081/api/posts/"+id, post);
}
  
}
