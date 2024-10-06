import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AssignmentService } from '../services/assignment.service';
import { Assignment } from '../models/assignment'; 

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent implements OnInit {
  assignmentForm!: FormGroup;

  constructor(private fb: FormBuilder, private assignmentService: AssignmentService, private router: Router) 
  {
    this.assignmentForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null],
      type: ['', Validators.required],
      isRecurring: [false]
    });
  }
  ngOnInit(): void {
 
  }

  onSubmit() {
    debugger
    if (this.assignmentForm.valid) {
      const newAssignment: Assignment = this.assignmentForm.value;
      
      this.assignmentService.saveAssignment(newAssignment).subscribe(
        (response) => {
          console.log('משימה נשמרה בהצלחה', response);
          this.router.navigate(['/assignments']);
        },
        (error) => {
          console.error('שגיאה בשמירת המשימה', error);
        }
      );
    }
  }


  goBack() {
    this.router.navigate(['/assignments']);
  }



}
