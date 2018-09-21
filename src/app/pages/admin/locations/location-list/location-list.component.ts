import { Component, OnInit } from '@angular/core';
import { Location } from '../../../../domain/location';
import { EntityService } from '../../../../services/entity.service';

@Component({
  selector: 'cse-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  locations: Location[] = [];
  page = 0;
  size = 10;

  constructor(private entityService: EntityService) { }

  ngOnInit() {
    this.loadLocations();
  }

  loadLocations() {
    this.entityService.setPath("locations");
    this.entityService.getAll(this.page, this.size).subscribe((resp: any) => {
      this.locations = resp.content;
    }, error => {
      console.log(error);
    })
  }

}
