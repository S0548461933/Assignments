export class Assignment {
    id: number;
    name: string;
    startDate: Date;
    isCompleted: boolean;
    endDate?: Date; 
    assignmentType: 'Personal' | 'Work' | 'Study'; 
    isRecurring: boolean;
    description: string;
    isArchived: boolean;
  
    constructor(
      id: number,
      name: string,
      startDate: Date,
      isCompleted: boolean,
      assignmentType: 'Personal' | 'Work' | 'Study',
      isRecurring: boolean,
      description: string,
      isArchived: boolean,
      endDate?: Date
    ) {
      this.id = id;
      this.name = name;
      this.startDate = startDate;
      this.isCompleted = isCompleted;
      this.assignmentType = assignmentType;
      this.isRecurring = isRecurring;
      this.description = description;
      this.isArchived = isArchived;
      this.endDate = endDate;
    }
  }
  