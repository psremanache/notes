import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-note',
  templateUrl: './show-note.component.html',
  styleUrls: ['./show-note.component.css']
})
export class ShowNoteComponent implements OnInit {
 lists:[];
 hasItem:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
