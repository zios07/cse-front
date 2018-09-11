import { Component, OnInit } from '@angular/core';
import { Location } from '../../../domain/location';
import { EntityService } from '../../../services/entity.service';

@Component({
  selector: 'cse-all-locations',
  templateUrl: './all-locations.component.html',
  styleUrls: ['./all-locations.component.css']
})
export class AllLocationsComponent implements OnInit {

  private page: number = 0;
  private size: number = 7;

  locations: Location[] = [];

  constructor(private entityService: EntityService) { }

  ngOnInit() {
    this.loadLocations();
  }

  loadLocations() {
    this.entityService.setPath("locations");
    this.entityService.getAll(this.page, this.size).subscribe((resp: any) => {
      this.locations = resp.content;
      console.log(resp);
    }, error => {
      console.log(error);
    })
  }

}
