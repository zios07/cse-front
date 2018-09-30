import { Component, OnInit, ViewChild } from '@angular/core';
import { Subarea } from '../../../../domain/subarea';
import { EntityService } from '../../../../services/entity.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { zip } from 'rxjs';
import { Location } from '../../../../domain/location';

@Component({
  selector: 'cse-subarea-form',
  templateUrl: './subarea-form.component.html',
  styleUrls: ['./subarea-form.component.css']
})
export class SubareaFormComponent implements OnInit {

  subarea: Subarea = new Subarea();
  locations: Location[] = [];

  constructor(private entityService: EntityService,
              private router: Router,
              private toastr: ToastrService,
              private route: ActivatedRoute) {
      this.entityService.setPath("subareas");
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.loadLocations().subscribe((resp: any) => {
      this.locations = resp;
      this.loadSubareaForEdit();
    })
  }


  onSubmit(form) {
    this.addSubarea();
  }

  addSubarea() {
    this.entityService.setPath('subareas');
    this.entityService.create(this.subarea).subscribe(resp => {
      this.router.navigate(['/admin/subareas']);
    }, error => {
      this.toastr.error(JSON.stringify(error));
    })
  }

  loadSubareaForEdit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.entityService.getOne(id).subscribe((resp: any) => {
        this.subarea = resp;
        this.setSelectedLocation();
      }, error => {
        this.toastr.error(JSON.stringify(error));
      })
    }
  }

  loadLocations() {
    this.entityService.setPath("locations/all");
    return this.entityService.getAll();
  }

  setSelectedLocation() {
    if (this.locations) {
      const s = this.subarea;
      let match;
      this.locations.forEach(function (location) {
        if (location.id == s.location.id) {
          match = location;
        }
      })
      this.subarea.location = match;
    }
  }

}
