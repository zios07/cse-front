import { Component, OnInit, ViewChild } from '@angular/core';
import { Property } from '../../../../domain/property';
import { Router, ActivatedRoute } from '@angular/router';
import { EntityService } from '../../../../services/entity.service';
import { Type } from '../../../../domain/type';
import { ToastrService } from 'ngx-toastr';
import { Subarea } from '../../../../domain/subarea';
import { UUID } from 'angular2-uuid';
import { zip } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import {FileUpload} from 'primeng/primeng';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'cse-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit {

  uploadPhotoUrl = environment.API_URL + "properties/photos"

  @ViewChild('fileInput') fileInput: FileUpload;

  property: Property = new Property();
  selectedType: Type = new Type();
  selectedSubarea: Subarea = new Subarea();
  types: Type[] = [];
  subareas: Subarea[] = [];

  constructor(private entityService: EntityService,
    private formatter: DatePipe,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.init();
    this.generateUUID();
  }


  init() {
    const stream = zip(
      this.loadSubareas(),
      this.loadTypes()
    );
    stream.subscribe((resp: any) => {
      this.subareas = resp[0];
      this.types = resp[1];
      this.loadPropertyForEdit();
    })
  }

  onSubmit(form) {
    this.addProperty();
  }

  addProperty() {
    this.property.uuid = localStorage.getItem('uuid');
    this.entityService.setPath("properties");
    this.entityService.create(this.property).subscribe(resp => {
      this.router.navigate(['/admin/properties']);
    }, error => {
      this.toastr.error(JSON.stringify(error));
    })
  }

  uploadPhotos(event) {
    let photos = event.files;
    console.log(event.files);
    if(photos && photos.length > 0 ) {
      let fd = new FormData();
      fd.append("uuid", localStorage.getItem("uuid"));
      for (let i = 0; i < photos.length; i++) {
        var blob = new Blob([photos[i]], { type: "application/json" });
        fd.append('photos', blob, photos[i].name);
      }
      this.entityService.setPath("properties/photo-upload");
      this.entityService.create(fd).subscribe(resp => {
        this.toastr.info('Photos uploaded successfully');
      });
    }
  }

  loadPropertyForEdit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.entityService.setPath("properties");
      this.entityService.getOne(id).subscribe((resp: any) => {
        this.property = resp;
        this.property.activeDate = this.formatter.transform(this.property.activeDate, "yyyy-MM-dd");
        this.setSelectedType();
        this.setSelectedSubarea();
      }, error => {
        this.toastr.error(JSON.stringify(error));
      })
    }
  }

  loadTypes() {
    this.entityService.setPath("types");
    return this.entityService.getAll();
  }

  loadSubareas() {
    this.entityService.setPath("subareas");
    return this.entityService.getAll();
  }

  setSelectedType() {
    if (this.types) {
      const p = this.property;
      let match;
      this.types.forEach(function (type) {
        if (type.id == p.type.id) {
          match = type;
        }
      })
      this.property.type = match;
    }
  }

  setSelectedSubarea() {
    if (this.subareas) {
      const p = this.property;
      let match;
      this.subareas.forEach(function (subarea) {
        if (subarea.id == p.subarea.id) {
          match = subarea;
        }
      })
      this.property.subarea = match;
    }
  }

  generateUUID() {
    localStorage.removeItem("uuid");
    let uuid = UUID.UUID();
    localStorage.setItem("uuid", uuid);
  }

}
