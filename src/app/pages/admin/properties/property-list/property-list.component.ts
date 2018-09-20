import { Component, OnInit } from '@angular/core';
import { Property } from '../../../../domain/property';
import { EntityService } from '../../../../services/entity.service';
import { DataTableResource } from '../../../../../../node_modules/angular5-data-table';
import {} from 'rxjs/Subject';

@Component({
  selector: 'cse-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Property[] = [];
  page = 0;
  size = 10
	tableResource: DataTableResource<Property>;
	items: Property[] = [];
	itemsCount: number;;

  constructor(private entityService: EntityService) { }

  ngOnInit() {
    this.loadProperties();
  }

  loadProperties() {
    this.entityService.setPath("properties");
    this.entityService.getAll(this.page, this.size).subscribe((resp: any) => {
      this.initializeDataTable(resp.content);
    }, error => {
      console.log(error);
    })
  }

  deleteProperty(id) {
    console.log(id);
  }

  reloadItems(params) {
		if(this.tableResource)
			this.tableResource.query(params)
				.then(items => this.items = items);
	}

	initializeDataTable(properties: Property[]) {
		this.tableResource = new DataTableResource(properties);
		this.tableResource.query({offset: 0})
			.then(items => this.items = items);
		this.tableResource.count()
			.then(count => this.itemsCount = count);
	}

}
