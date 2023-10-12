import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentInterface } from 'src/app/interfaces/document.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  constructor(private http: HttpClient) {}

  // get all document data
  getDocumentData(): Observable<DocumentInterface[]> {
    const url = environment.baseURL + environment.document;
    return this.http.get<DocumentInterface[]>(url);
  }

  // create a new document
  postDocumentData(documentData: DocumentInterface) {
    const url = environment.baseURL + environment.document;
    return this.http.post(url, documentData);
  }

  // get the document by ID
  getDocumentDataByID(id: string): Observable<DocumentInterface[]> {
    const url = environment.baseURL + environment.document + `?id=${id}`;
    return this.http.get<DocumentInterface[]>(url);
  }

  // update the document by ID
  updateDocumentDataByID(
    data: DocumentInterface,
    id: string
  ): Observable<DocumentInterface[]> {
    const url = environment.baseURL + environment.document + `/${id}`;
    return this.http.put<DocumentInterface[]>(url, data);
  }

  // delete the document by ID
  deleteDocumentByID(id: string) {
    const url = environment.baseURL + environment.document + `/${id}`;
    return this.http.delete<DocumentInterface[]>(url);
  }
}
