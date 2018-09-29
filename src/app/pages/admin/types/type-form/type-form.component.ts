import { Component, OnInit } from '@angular/core';
import { Type } from '../../../../domain/type';
import { EntityService } from '../../../../services/entity.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'cse-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.css']
})
export class TypeFormComponent implements OnInit {

  type: Type = new Type();

  constructor(private entityService: EntityService,
              private router: Router,
              private toastr: ToastrService,
              private route: ActivatedRoute) {
      this.entityService.setPath("types");
  }

  ngOnInit() {
    // If we are editing a type, we load it via this function
    this.loadTypeForEdit();
  }

  onSubmit(form) {
    this.addType(form);
  }

  addType(form) {
    this.entityService.create(this.type).subscribe(resp => {
      this.router.navigate(['/admin/types']);
    }, error => {
      this.toastr.error(JSON.stringify(error));
    })
  }

  loadTypeForEdit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.entityService.getOne(id).subscribe((resp: any) => {
        this.type = resp;
      }, error => {
        this.toastr.error(JSON.stringify(error));
      })
    }
  }
}
