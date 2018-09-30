import { Component, OnInit } from '@angular/core';
import { User } from '../../domain/user';
import { EntityService } from '../../services/entity.service';
import { ToastrService } from 'ngx-toastr';
import { Account } from '../../domain/account';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cse-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  param = { responseType: 'text' };

  constructor(private entityService: EntityService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) {
    this.user.account = new Account();
  }

  ngOnInit() {
  }

  login(creds) {
    this.entityService.setPath("auth");
    this.entityService.create(creds, this.param).subscribe((resp: any) => {
      localStorage.setItem('token', resp);
      localStorage.setItem('username', creds.username);
      let srcUrl = this.route.snapshot.queryParamMap.get("src");
      this.router.navigate([srcUrl || '/']);
    }, error => {
      if (error.status == 400 || error.status == 401)
        this.toastr.error("invalid username/password");
    })
  }

}
