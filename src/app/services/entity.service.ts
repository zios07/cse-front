import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  private path:string;
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getOne(id) {
    return this.http.get(this.apiUrl + this.path + "/" + id);
  }

  getAll() {
    return this.http.get(this.apiUrl + this.path);
  }

  create(entity) {
    return this.http.post(this.apiUrl + this.path, entity);
  }

  update(entity) {
    return this.http.put(this.apiUrl + this.path, entity);
  }

  delete(id) {
    return this.http.delete(this.apiUrl + this.path + "/" + id);
  }

  search(searchDto) {
    return this.http.post(this.apiUrl + this.path, searchDto);
  }

  setPath(path: string) {
    this.path = path;
  }

}
