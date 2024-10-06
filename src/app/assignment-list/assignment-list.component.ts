import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../services/assignment.service';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { Router } from '@angular/router';
import { Assignment } from '../models/assignment';


@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {
  assignments:Assignment []= [new Assignment(1,'Work',new Date('2024-09-01'),false,'Personal',false,'Description for Assignment 1',false)
  ];
  loading: boolean = true;
  assignmentsFull=[...this.assignments];

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
        
      
        this.assignments = data.map(assignment => {

          const assignments: Assignment = {
                id: assignment.id,
                assignmentType: assignment.assignmentType || 'Unknown', 
                name: assignment.name,
                description: assignment.description,
                startDate: assignment.startDate,
                endDate: assignment.endDate || undefined,
                isRecurring: assignment.isRecurring,
                isCompleted: assignment.isCompleted,
                isArchived: false, 
            };
            const oneWeekAgo = new Date();
            oneWeekAgo.setDate(oneWeekAgo.getDate() - 7); // מחשב תאריך לפני שבוע
    
            // בודק אם המשימה הושלמה לפני שבוע
            if (assignment.isCompleted && assignment.endDate && new Date(assignment.endDate) < oneWeekAgo) {
                assignment.isArchived = true;
            }
            return assignment; 
        });
        // מסנן משימות לפי בחירה
        this.filterAssignments();
        this.loading = false;
        debugger
        this.assignmentsFull=[...this.assignments];

    });
}


filterAssignments(): void {
  debugger
  this.assignments = this.assignmentsFull.filter(assignment => this.showArchived || !assignment.isArchived);
}


  archiveAssignment(assignment: Assignment):void {
    assignment.isArchived = true;
  }
  createNewAssignment(){
    this.router.navigate(['/create-assignment']);
  }

  toggleCompletion(assignment: Assignment): void {
    assignment.isCompleted = !assignment.isCompleted; // משנה את מצב הצ'ק בוקס
    if (assignment.isCompleted) {
      assignment.endDate = new Date(); // מגדיר את תאריך הסיום
    } else {
      assignment.endDate = undefined; // מאפס את תאריך הסיום אם לא הושלם
    }
  }

 

}

