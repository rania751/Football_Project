import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  userUrl: string = 'http://localhost:3000/users';

  signup(user: any) {
    return this.httpClient.post(this.userUrl + "/signup", user);

  }
  login(user: any) {
    return this.httpClient.post(this.userUrl + "/login", user);

  }

  editUser(user: any, id: number) {
    return this.httpClient.put(this.userUrl + id, user);

  }

  getAllUseres() {
    return this.httpClient.get(this.userUrl);
  }

  getUserById(id: any) {

    return this.httpClient.get(this.userUrl + id)
  }

  deleteUser(id: any) {
    return this.httpClient.delete(this.userUrl + id)
  }
}
