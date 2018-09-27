import { Component, OnInit } from '@angular/core';
import { Property } from '../../../../domain/property';
import { EntityService } from '../../../../services/entity.service';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { LazyLoadEvent } from 'primeng/primeng';

@Component({
  selector: 'cse-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Property[] = [];
  page = 0;
  size = 2;
  loading = false;
  totalRecords;

  constructor(private entityService: EntityService,
    private toastr: ToastrService) {
  }

  ngOnInit() {
    this.loadProperties();
  }

  loadProperties() {
    this.loading = true;
    this.entityService.setPath("properties/with-photos");
    this.entityService.getAll(this.page, this.size).subscribe((resp: any) => {
      this.properties = resp.content;
      this.totalRecords = resp.totalElements;
      this.loading = false;
    }, error => {
      this.toastr.error(JSON.stringify(error));
    })
  }

  delete(id) {
    this.entityService.setPath("properties");
    this.entityService.delete(id).subscribe(resp => {
      this.toastr.info("Location deleted : " + id);
      this.loadProperties();
    })
  }

  loadPropertiesLazily(event: LazyLoadEvent) {
    this.loading = true;
    setTimeout(() => {
      this.page =((event.first + event.rows) / this.size ) - 1;
      this.ngOnInit();
    }, 1000);
  }

}
