import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import{MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
const MaterialComponents=[
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatListModule
]
@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
