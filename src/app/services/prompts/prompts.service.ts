import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PromptInterface } from 'src/app/interfaces/prompt.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PromptsService {
  constructor(private http: HttpClient) {}

  // create new prompt
  postPromptDataMethod(data: PromptInterface): Observable<PromptInterface> {
    const url = environment.baseURL + environment.prompt;
    return this.http.post<PromptInterface>(url, data);
  }

  // get all the prompt data
  getPromptData(): Observable<PromptInterface[]> {
    const url = environment.baseURL + environment.prompt;
    return this.http.get<PromptInterface[]>(url);
  }

  // get the document by ID
  getPromptByID(id: string): Observable<PromptInterface[]> {
    const url = environment.baseURL + environment.prompt + `?id=${id}`;
    return this.http.get<PromptInterface[]>(url);
  }

  // update the document by ID
  updatePromptDataByID(
    data: PromptInterface,
    id: string
  ): Observable<PromptInterface[]> {
    const url = environment.baseURL + environment.prompt + `/${id}`;
    return this.http.put<PromptInterface[]>(url, data);
  }

  // delete the document by ID
  deletePromptByID(id: string) {
    const url = environment.baseURL + environment.prompt + `/${id}`;
    return this.http.delete<PromptInterface[]>(url);
  }
}
