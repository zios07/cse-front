import { Component, OnInit } from '@angular/core';
import { Type } from '../../../../domain/type';
import { EntityService } from '../../../../services/entity.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'cse-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  types: Type[] = [];
  page = 0;
  size = 10;

  constructor(private entityService: EntityService,
            private toastr: ToastrService) {
    this.entityService.setPath("types");
  }

  ngOnInit() {
    this.loadTypes();
  }

  loadTypes() {
    this.entityService.getAll(this.page, this.size).subscribe((resp: any) => {
      this.types = resp;
    }, error => {
      console.log(error);
    })
  }

  delete(id) {
    this.entityService.delete(id).subscribe(resp => {
      this.toastr.info("Location deleted : " + id);
      this.loadTypes();
    })
  }

}
