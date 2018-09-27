import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '../../../../domain/location';
import { EntityService } from '../../../../services/entity.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UUID } from 'angular2-uuid';
import { FileUpload } from 'primeng/primeng';

@Component({
  selector: 'cse-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})

export class LocationFormComponent implements OnInit {

  location: Location = new Location();

  constructor(private entityService: EntityService,
              private router: Router,
              private toastr: ToastrService,
              private route: ActivatedRoute) {
      this.entityService.setPath("locations");
  }

  ngOnInit() {
    this.generateUUID();
    this.loadLocationForEdit();
  }

  onSubmit(form) {
    this.addLocation();
  }

  addLocation() {
    this.location.uuid = localStorage.getItem('uuid-location');
    this.entityService.setPath('locations');
    this.entityService.create(this.location).subscribe(resp => {
      this.router.navigate(['/admin/locations']);
    }, error => {
      this.toastr.error(JSON.stringify(error));
    })
  }

  uploadPhoto(event) {
    let photos = event.files; 
    if(photos && photos.length > 0 ) {
      let fd = new FormData();
      fd.append("uuid", localStorage.getItem("uuid-location"));
      for (let i = 0; i < photos.length; i++) {
        var blob = new Blob([photos[i]], { type: "application/json" });
        fd.append('areaImage', blob, photos[i].name);
      }
      this.entityService.setPath("locations/photo-upload");
      this.entityService.create(fd).subscribe(resp => {
        this.toastr.info('Photos uploaded successfully');
      });
    }
  }

  loadLocationForEdit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.entityService.getOne(id).subscribe((resp: any) => {
        this.location = resp;
      }, error => {
        this.toastr.error(JSON.stringify(error));
      })
    }
  }

  generateUUID() {
    localStorage.removeItem("uuid-location");
    let uuid = UUID.UUID();
    localStorage.setItem("uuid-location", uuid);
  }
  
} 
