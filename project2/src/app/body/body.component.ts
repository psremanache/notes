import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  showNoteColor:string="warn";
  addColor:string="primary";
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  loadAdd(){
    this.router.navigate(['/addNote']);
    this.addColor="warn";
    this.showNoteColor="primary";
  }
  loadShowNote(){
    this.router.navigate(['/']);
    this.addColor="primary";
    this.showNoteColor="warn";
  }
}
