import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../services/entity.service';
import { Type } from '../../domain/type';
import { Location } from '../../domain/location';
import { Subarea } from '../../domain/subarea';
import { Property } from '../../domain/property';

@Component({
  selector: 'cse-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  types: Type[];
  locations: Location[];
  subareas: Subarea[];
  properties: Property[];

  constructor(private entityService: EntityService) { }

  ngOnInit() {
    this.loadTypes();
    this.loadLocations();
    this.loadSubareas();
  }

  loadTypes() {
    this.entityService.setPath("types");
    this.entityService.getAll().subscribe((resp: Type[]) => {
      this.types = resp;
    }, error => {
      console.log(error);
    })
  }

  loadLocations() {
    this.entityService.setPath("locations");
    this.entityService.getAll().subscribe((resp: Location[]) => {
      this.locations = resp;
      console.log(this.locations);
    }, error => {
      console.log(error);
    })
  }

  loadSubareas() {
    this.entityService.setPath("subareas");
    this.entityService.getAll().subscribe((resp: Subarea[]) => {
      this.subareas = resp;
    }, error => {
      console.log(error);
    })
  }

  searchProperties() {
    this.entityService.setPath("properties");
    this.entityService.getAll().subscribe((resp: Property[]) => {
      this.properties = resp;
    }, error => {
      console.log(error);
    })
  }

}
