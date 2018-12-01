
import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { Observable } from 'rxjs';
import {Post} from '../post.model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})

export class SerachComponent implements OnInit {

  
  posts: any = [];

  constructor(private ps:PostService){}

  ngOnInit(){
    //this.posts = this.ps.getPosts();
    this.ps.getPostsData().subscribe(data => {
        this.posts = data;
    });
   }

   onDelete(id:String){
     console.log("Delete called "+ id);
     this.ps.deletePost(id).subscribe(() =>
     {
        this.ngOnInit();
     })
   }
}


/*


var expectFriendNames = function(expectedNames, key) {
  element.all(by.repeater(key + ' in friends').column(key + '.name')).then(function(arr) {
    arr.forEach(function(wd, i) {
      expect(wd.getText()).toMatch(expectedNames[i]);
    });
  });
};

it('should search across all fields when filtering with a string', function() {
  var searchText = element(by.model('searchText'));
  searchText.clear();
  searchText.sendKeys('m');
  expectFriendNames(['Mary', 'Mike', 'Adam'], 'friend');

  searchText.clear();
  searchText.sendKeys('76');
  expectFriendNames(['John', 'Julie'], 'friend');
});

it('should search in specific fields when filtering with a predicate object', function() {
  var searchAny = element(by.model('search.$'));
  searchAny.clear();
  searchAny.sendKeys('i');
  expectFriendNames(['Mary', 'Mike', 'Julie', 'Juliette'], 'friendObj');
});
it('should use a equal comparison when comparator is true', function() {
  var searchName = element(by.model('search.name'));
  var strict = element(by.model('strict'));
  searchName.clear();
  searchName.sendKeys('Julie');
  strict.click();
  expectFriendNames(['Julie'], 'friendObj');
});


*/ 