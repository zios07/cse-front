import { Component, OnInit } from '@angular/core';
import { Location } from '../../../../domain/location';
import { EntityService } from '../../../../services/entity.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'cse-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  locations: Location[] = [];
  page = 0;
  size = 12;

  constructor(private entityService: EntityService,
              private toastr: ToastrService) {
    this.entityService.setPath("locations");
   }

  ngOnInit() {
    this.loadLocations();
  }

  loadLocations() {
    this.entityService.getAll(this.page, this.size).subscribe((resp: any) => {
      this.locations = resp.content;
    }, error => {
      console.log(error);
    })
  }

  delete(id) {
    this.entityService.delete(id).subscribe(resp => {
      this.toastr.info("Location deleted : " + id);
      this.loadLocations();
    })
  }

}
