import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Complaints } from '../complaints';
import { ComplaintsService } from '../complaints.service';
=======
>>>>>>> ala-Branch

@Component({
  selector: 'app-update-complaints',
  templateUrl: './update-complaints.component.html',
  styleUrls: ['./update-complaints.component.css']
})
export class UpdateComplaintsComponent implements OnInit {
<<<<<<< HEAD
  data : Complaints = {
    id:'',
    topic: '',
    complaintDate: Date.now()
  };

  submitted = false;
  constructor(private complaintsService: ComplaintsService) { 

  }
  editComplaint(data:Complaints){
    this.complaintsService.updateComplaints(data).subscribe();
  }

 
  ngOnInit(): void {
    ;
  }
=======

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> ala-Branch
}
