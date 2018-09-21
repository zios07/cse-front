import { Component, OnInit } from '@angular/core';
import { Property } from '../../../../domain/property';
import { EntityService } from '../../../../services/entity.service';
import { Subject } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'cse-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Property[] = [];
  page = 0;
  size = 10;

  constructor(private entityService: EntityService) { }

  ngOnInit() {
    this.loadProperties();
  }

  loadProperties() {
    this.entityService.setPath("properties");
    this.entityService.getAll(this.page, this.size).subscribe((resp: any) => {
      this.properties = resp.content;
    }, error => {
      console.log(error);
    })
  }

}
