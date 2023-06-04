import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/interfaces/User';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users$ = new BehaviorSubject<any[]>([])
  selectedUser:User | undefined

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.fetchUsers();
  }

  fetchUsers(){
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe((users:User[]) => this.users$.next(users))
  }

  selectUser(user:User){
    this.selectedUser = user
    console.log(this.selectedUser)
  }

}
