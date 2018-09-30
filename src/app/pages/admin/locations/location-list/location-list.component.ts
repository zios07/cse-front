import { Component, OnInit } from '@angular/core';
import { Location } from '../../../../domain/location';
import { EntityService } from '../../../../services/entity.service';
import { ToastrService } from 'ngx-toastr';
import { LazyLoadEvent } from 'primeng/primeng';

@Component({
  selector: 'cse-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  locations: Location[] = [];
  page = 0;
  size = 10;
  loading = false;
  totalRecords;
  displayPopup: boolean = false;

  constructor(private entityService: EntityService,
    private toastr: ToastrService) {
  }

  ngOnInit() {
    this.loadLocations();
  }

  loadLocations() {
    this.loading = true;
    this.entityService.setPath("locations");
    this.entityService.getAll(this.page, this.size).subscribe((resp: any) => {
      this.locations = resp.content;
      this.totalRecords = resp.totalElements;
      this.loading = false;
    }, error => {
      this.toastr.error(JSON.stringify(error));
    })
  }

  delete(id) {
    this.loading = true;
    this.entityService.setPath("locations");
    this.entityService.delete(id).subscribe(resp => {
      this.loading = false;
      this.toastr.info("Location deleted : " + id);
      this.loadLocations();
    }, error => {
      this.displayPopup = false;
      this.loading = false;
      this.toastr.error(JSON.stringify(error));
    })
  }

  
  loadLocationsLazily(event: LazyLoadEvent) {
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

