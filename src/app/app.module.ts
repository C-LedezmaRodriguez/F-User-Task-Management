import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { MockService } from './services/mock.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [MockService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
