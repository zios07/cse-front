import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../../../services/entity.service';
import { User } from '../../../../domain/user';

@Component({
  selector: 'cse-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  users: User[] = [];
  page = 0;
  size = 10;

  constructor(private entityService: EntityService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.entityService.setPath("users");
    this.entityService.getAll(this.page, this.size).subscribe((resp: any) => {
      this.users = resp;
    }, error => {
      console.log(error);
    })
  }

}
