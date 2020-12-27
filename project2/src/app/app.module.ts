import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BodyComponent } from './body/body.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { ShowNoteComponent } from './show-note/show-note.component';
import {RouterModule, Routes} from '@angular/router';
const appRoutes:Routes=[
  {path:'',component:ShowNoteComponent},
  {path:'addNote',component:AddNoteComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    AddNoteComponent,
    ShowNoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
