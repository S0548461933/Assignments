import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../services/assignment.service';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { Router } from '@angular/router';
import { Assignment } from '../models/assignment';

interface AssignmentInterface {
  id: number;
  type: string;
  name: string;
  description: string;
  startDate: Date;
  endDate?: Date | null;
  isRecurring: boolean;
  isCompleted: boolean;
  isArchived: boolean;
}
@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {
  assignments: AssignmentInterface[] = [
    {
      id: 1,
      type: 'Work',
      name: 'Assignment 1',
      description: 'Description for Assignment 1',
      startDate: new Date('2024-09-01'),
      endDate: null,
      isRecurring: false,
      isCompleted: false,
      isArchived: false
    },
    
  ];
  loading: boolean = true;
  showArchived: boolean = false; 
  sortField: string = ''; 
  sortOrder: number = 1; 

  constructor(private assignmentService: AssignmentService,private tableModul:TableModule,private checkboxModule:CheckboxModule,private router: Router) {}

  ngOnInit(): void {
    this.loadAssignments();

  }

  
  loadAssignments(): void {
    this.assignmentService.getAssignments().subscribe((data: Assignment[]) => {
        console.log(data);
        
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7); // מחשב תאריך לפני שבוע

        this.assignments = data.map(assignment => {

          const assignmentInterface: AssignmentInterface = {
                id: assignment.id,
                type: assignment.assignmentType || 'Unknown', 
                name: assignment.name,
                description: assignment.description,
                startDate: assignment.startDate,
                endDate: assignment.endDate || null,
                isRecurring: assignment.isRecurring,
                isCompleted: assignment.isCompleted,
                isArchived: false, 
            };

            // בודק אם המשימה הושלמה לפני שבוע
            if (assignment.isCompleted && assignment.endDate && new Date(assignment.endDate) < oneWeekAgo) {
                assignmentInterface.isArchived = true;
            }
            return assignmentInterface; 
        });
        // מסנן משימות לפי בחירה
        this.filterAssignments();
        this.loading = false;
    });
}

filterAssignments(): void {
  this.assignments = this.assignments.filter(assignment => this.showArchived || !assignment.isArchived);
}

  deleteAssignment(id: number) {
    this.assignments = this.assignments.filter(assignment => assignment.id !== id);
  }


  archiveAssignment(assignment: AssignmentInterface):void {
    assignment.isArchived = true;
  }
  createNewAssignment(){
    this.router.navigate(['/create-assignment']);
  }

  toggleCompletion(assignment: AssignmentInterface): void {
    assignment.isCompleted = !assignment.isCompleted; // משנה את מצב הצ'ק בוקס
    if (assignment.isCompleted) {
      assignment.endDate = new Date(); // מגדיר את תאריך הסיום
    } else {
      assignment.endDate = undefined; // מאפס את תאריך הסיום אם לא הושלם
    }
  }

 

}

