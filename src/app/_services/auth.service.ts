import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';
import {ENDPOINTS} from '../endpoints';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpClientWithoutInterceptor: HttpClient;

  constructor(
    private http: HttpClient,
    private httpBackend: HttpBackend
  ) {
    this.httpClientWithoutInterceptor = new HttpClient(httpBackend);
  }

  login(data: { email, password }) {
    // return this.http.post(ENDPOINTS.LOGIN, data);
    return this.httpClientWithoutInterceptor.post(ENDPOINTS.LOGIN, data);
  }
}
