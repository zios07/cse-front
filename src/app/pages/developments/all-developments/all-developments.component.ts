import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../../services/entity.service';
import { Property } from '../../../domain/property';

@Component({
  selector: 'cse-all-developments',
  templateUrl: './all-developments.component.html',
  styleUrls: ['./all-developments.component.css']
})
export class AllDevelopmentsComponent implements OnInit {

  private page: number = 0;
  private size: number = 7;

  developments: Property[] = [];

  constructor(private entityService: EntityService) { }

  ngOnInit() {
    this.loadDevelopments();
  }

  loadDevelopments() {
    this.entityService.setPath("properties/developments/all");
    this.entityService.getAll(this.page, this.size).subscribe((resp: any) => {
      this.developments = resp.content;
    }, error => {
      console.log(error);
    })
  }

}
