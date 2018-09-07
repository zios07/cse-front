import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../services/entity.service';
import { Type } from '../../domain/type';
import { Location } from '../../domain/location';
import { Subarea } from '../../domain/subarea';
import { Property } from '../../domain/property';
import { PropertySearchDto } from '../../domain/property-search-dto';

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
  budget: string;
  searchDto: PropertySearchDto;
  page = 0;
  size = 10;

  constructor(private entityService: EntityService) {
    this.searchDto = new PropertySearchDto();
   }

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
    if(this.budget) {
      if(this.budget.indexOf("-") > -1) {
        var budget =this.budget.split("-");
        this.searchDto.minPrice = +budget[0];
        this.searchDto.maxPrice = +budget[1];
      } else if(this.budget.indexOf("+") > -1) {
        var budget =this.budget.split("+");
        this.searchDto.minPrice = +budget[1];
      }
    } else {
      this.searchDto.maxPrice = undefined;
      this.searchDto.minPrice = undefined;
    }
    this.entityService.setPath("properties/search");
    this.entityService.search(this.searchDto, this.page, this.size).subscribe((resp: Property[]) => {
      this.properties = resp;
      console.log(resp);
    }, error => {
      console.log(error);
    })
  }

}
