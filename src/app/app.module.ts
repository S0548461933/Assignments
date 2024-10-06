import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { DropdownModule } from 'primeng/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext'; 
import { CalendarModule } from 'primeng/calendar'; 
import { HttpClientModule } from '@angular/common/http';   

@NgModule({
  declarations: [
    AppComponent,
    AssignmentListComponent,
    AssignmentFormComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    CalendarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
