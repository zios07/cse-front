import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../services/entity.service';
import { Type } from '../../domain/type';
import { Location } from '../../domain/location';
import { Subarea } from '../../domain/subarea';
import { Property } from '../../domain/property';
import { PropertySearchDto } from '../../domain/property-search-dto';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

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
  images = [];

  constructor(private entityService: EntityService,
              private carousselConfig: NgbCarouselConfig) {
    this.searchDto = new PropertySearchDto();
    carousselConfig.wrap=true;
    carousselConfig.interval=5000;
    carousselConfig.showNavigationIndicators=false;
  }

  ngOnInit() {
    this.loadSliders();
    this.loadTypes();
    this.loadLocations();
    this.loadSubareas();
  }

  loadTypes() {
    this.entityService.setPath("types");
    this.entityService.getAll(this.page, this.size).subscribe((resp: Type[]) => {
      this.types = resp;
    }, error => {
      console.log(error);
    })
  }

  loadLocations() {
    this.entityService.setPath("locations");
    this.entityService.getAll(this.page, this.size).subscribe((resp: any) => {
      this.locations = resp.content;
    }, error => {
      console.log(error);
    })
  }

  loadSubareas() {
    this.entityService.setPath("subareas");
    this.entityService.getAll(this.page, this.size).subscribe((resp: Subarea[]) => {
      this.subareas = resp;
    }, error => {
      console.log(error);
    })
  }

  searchProperties() {
    if (this.budget) {
      if (this.budget.indexOf("-") > -1) {
        var budget = this.budget.split("-");
        this.searchDto.minPrice = +budget[0];
        this.searchDto.maxPrice = +budget[1];
      } else if (this.budget.indexOf("+") > -1) {
        var budget = this.budget.split("+");
        this.searchDto.minPrice = +budget[1];
      }
    } else {
      this.searchDto.maxPrice = undefined;
      this.searchDto.minPrice = undefined;
    }
    this.entityService.setPath("properties/search");
    this.entityService.search(this.searchDto, this.page, this.size).subscribe((resp: any) => {
      this.properties = resp.content;
    }, error => {
      console.log(error);
    })
  }

  loadSliders() {
    this.images = [
      '../../assets/imgs/sliders/slider04.jpg',
      '../../assets/imgs/sliders/slider02.jpg', 
      '../../assets/imgs/sliders/slider03.png', 
      '../../assets/imgs/sliders/slider05.jpg', 
      '../../assets/imgs/sliders/slider06.jpg', 
      '../../assets/imgs/sliders/slider07.jpg'
    ];
    
  }

}
