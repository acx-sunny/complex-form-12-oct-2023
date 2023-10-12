import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScriptInterface } from 'src/app/interfaces/script.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ScriptsService {
  constructor(private http: HttpClient) {}

  // create a new script data
  postScriptDataMethod(data: ScriptInterface): Observable<ScriptInterface> {
    const url = environment.baseURL + environment.script;
    return this.http.post<ScriptInterface>(url, data);
  }

  // get all the script data
  getscriptData(): Observable<ScriptInterface[]> {
    const url = environment.baseURL + environment.script;
    return this.http.get<ScriptInterface[]>(url);
  }

  // get the script data by ID
  getScriptByID(id: string): Observable<ScriptInterface[]> {
    const url = environment.baseURL + environment.script + `?id=${id}`;
    return this.http.get<ScriptInterface[]>(url);
  }

  // update the script data by ID
  updateScriptDataByID(
    data: ScriptInterface,
    id: string
  ): Observable<ScriptInterface[]> {
    const url = environment.baseURL + environment.script + `/${id}`;
    return this.http.put<ScriptInterface[]>(url, data);
  }

  // delete the script data by ID
  deleteScriptByID(id: string) {
    const url = environment.baseURL + environment.script + `/${id}`;
    return this.http.delete<ScriptInterface[]>(url);
  }
}
