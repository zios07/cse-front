import { Component, OnInit } from '@angular/core';
import { Property } from '../../../../domain/property';
import { Router, ActivatedRoute } from '@angular/router';
import { EntityService } from '../../../../services/entity.service';

@Component({
  selector: 'cse-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit {

  property: Property = new Property();

  constructor(private entityService: EntityService,
              private router: Router,
              private route: ActivatedRoute) {
      this.entityService.setPath("properties");
  }

  ngOnInit() {
    // If we are editing a property, we load it via this function
    this.loadPropertyForEdit();
  }

  onSubmit(form) {
    this.addProperty(form);
  }

  addProperty(form) {
    this.entityService.create(this.property).subscribe(resp => {
      this.router.navigate(['/admin/properties']);
    }, error => {
      console.log(error);
    })
  }

  loadPropertyForEdit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.entityService.getOne(id).subscribe((resp: any) => {
        this.property = resp;
      }, error => {
        console.log(error);
      })
    }
  }

}
