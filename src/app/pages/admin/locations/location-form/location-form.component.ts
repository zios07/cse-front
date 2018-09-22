import { Component, OnInit } from '@angular/core';
import { Location } from '../../../../domain/location';
import { EntityService } from '../../../../services/entity.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cse-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent implements OnInit {

  location: Location = new Location();

  constructor(private entityService: EntityService,
              private router: Router,
              private route: ActivatedRoute) {
      this.entityService.setPath("locations");
  }

  ngOnInit() {
    // If we are editing a location, we load it via this function
    this.loadLocationForEdit();
  }

  onSubmit(form) {
    this.addLocation(form);
  }

  addLocation(form) {
    this.entityService.create(this.location).subscribe(resp => {
      this.router.navigate(['/admin/locations']);
    }, error => {
      console.log(error);
    })
  }

  loadLocationForEdit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.entityService.getOne(id).subscribe((resp: any) => {
        this.location = resp;
      }, error => {
        console.log(error);
      })
    }
  }

} 
