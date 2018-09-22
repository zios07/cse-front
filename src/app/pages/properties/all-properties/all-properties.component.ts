import { Component, OnInit } from '@angular/core';
import { Property } from '../../../domain/property';
import { EntityService } from '../../../services/entity.service';

@Component({
  selector: 'cse-all-properties',
  templateUrl: './all-properties.component.html',
  styleUrls: ['./all-properties.component.css']
})
export class AllPropertiesComponent implements OnInit {

  
  private page: number = 0;
  private size: number = 19;

  properties: Property[] = [];

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
