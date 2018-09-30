import { Component, OnInit } from '@angular/core';
import { Type } from '../../../../domain/type';
import { EntityService } from '../../../../services/entity.service';
import { ToastrService } from 'ngx-toastr';
import { LazyLoadEvent } from 'primeng/primeng';

@Component({
  selector: 'cse-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  types: Type[] = [];
  page = 0;
  size = 10;
  loading = false;
  totalRecords;
  displayPopup: boolean = false;

  constructor(private entityService: EntityService,
            private toastr: ToastrService) {
    this.entityService.setPath("types");
  }

  ngOnInit() {
    this.loadTypes();
  }

  loadTypes() {
    this.loading = true;
    this.entityService.getAll(this.page, this.size).subscribe((resp: any) => {
      this.types = resp.content;
      this.totalRecords = resp.totalElements;
      this.loading = false;
    }, error => {
      this.toastr.error(JSON.stringify(error));
    })
  }

  delete(id) {
    this.entityService.delete(id).subscribe(resp => {
      this.loading = false;
      this.toastr.info("Type deleted : " + id);
      this.loadTypes();
      this.displayPopup = false;
    }, error => {
      this.displayPopup = false;
      this.loading = false;
      this.toastr.error(JSON.stringify(error));
    })
  }  

  loadTypesLazily(event: LazyLoadEvent) {
    this.loading = true;
    setTimeout(() => {
      this.page = ((event.first + event.rows) / this.size) - 1;
      this.ngOnInit();
    }, 1000);
  }
  
  showDialog() {
      this.displayPopup = true;
  }

}
