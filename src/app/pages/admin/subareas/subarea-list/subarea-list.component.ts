import { Component, OnInit } from '@angular/core';
import { Subarea } from '../../../../domain/subarea';
import { EntityService } from '../../../../services/entity.service';
import { ToastrService } from 'ngx-toastr';
import { LazyLoadEvent } from 'primeng/primeng';

@Component({
  selector: 'cse-subarea-list',
  templateUrl: './subarea-list.component.html',
  styleUrls: ['./subarea-list.component.css']
})
export class SubareaListComponent implements OnInit {

  subareas: Subarea[] = [];
  page = 0;
  size = 10;
  loading = false;
  totalRecords;
  displayPopup: boolean = false;

  constructor(private entityService: EntityService,
    private toastr: ToastrService) {
  }

  ngOnInit() {
    this.loadSubareas();
  }

  loadSubareas() {
    this.loading = true;
    this.entityService.setPath("subareas");
    this.entityService.getAll(this.page, this.size).subscribe((resp: any) => {
      this.subareas = resp.content;
      this.totalRecords = resp.totalElements;
      this.loading = false;
    }, error => {
      this.toastr.error(JSON.stringify(error));
    })
  }

  delete(id) {
    this.loading = true;
    this.entityService.setPath("subareas");
    this.entityService.delete(id).subscribe(resp => {
      this.loading = false;
      this.toastr.info("Subarea deleted : " + id);
      this.loadSubareas();
      this.displayPopup = false;
    }, error => {
      this.displayPopup = false;
      this.loading = false;
      this.toastr.error(JSON.stringify(error));
    })
  }

  
  loadSubareasLazily(event: LazyLoadEvent) {
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
