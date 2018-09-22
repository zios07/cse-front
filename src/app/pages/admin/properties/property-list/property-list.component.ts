import { Component, OnInit } from '@angular/core';
import { Property } from '../../../../domain/property';
import { EntityService } from '../../../../services/entity.service';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'cse-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Property[] = [];
  page = 0;
  size = 20;

  constructor(private entityService: EntityService,
              private toastr: ToastrService) { 
    this.entityService.setPath("properties");
    }

  ngOnInit() {
    this.loadProperties();
  }

  loadProperties() {
    this.entityService.getAll(this.page, this.size).subscribe((resp: any) => {
      this.properties = resp.content;
    }, error => {
      console.log(error);
    })
  }

  delete(id) {
    this.entityService.delete(id).subscribe(resp => {
      this.toastr.info("Location deleted : " + id);
      this.loadProperties();
    })
  }

}
