import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockService } from '../../services/mock.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  standalone: true,  
  imports: [CommonModule] 
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private mockService: MockService) {}

  ngOnInit() {
    this.mockService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
  createUser(user: any): void {
    this.mockService.createUser(user).subscribe(() => {
      this.ngOnInit();
    });
  }
}
