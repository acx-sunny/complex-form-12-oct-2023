import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SchemaInterface } from 'src/app/interfaces/schema.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SchemasService {
  constructor(private http: HttpClient) {}

  // get all the schema data
  getSchemaData(): Observable<SchemaInterface[]> {
    const url = environment.baseURL + environment.schema;
    return this.http.get<SchemaInterface[]>(url);
  }

  // create a new schema
  postSchemaData(SchemaData: SchemaInterface) {
    const url = environment.baseURL + environment.schema;
    return this.http.post(url, SchemaData);
  }

  // get the schema by ID
  getSchemaByID(id: string): Observable<SchemaInterface[]> {
    const url = environment.baseURL + environment.schema + `?id=${id}`;
    return this.http.get<SchemaInterface[]>(url);
  }

  // update the schema by ID
  updateSchemaDataByID(
    data: SchemaInterface,
    id: string
  ): Observable<SchemaInterface[]> {
    const url = environment.baseURL + environment.schema + `/${id}`;
    return this.http.put<SchemaInterface[]>(url, data);
  }

  // delete the schema by ID
  deleteSchemaByID(id: string) {
    const url = environment.baseURL + environment.schema + `/${id}`;
    return this.http.delete<SchemaInterface[]>(url);
  }
}
