import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';

@NgModule({
  imports: [
    CommonModule,
    EntryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EntryComponent]
})
export class EntryModule { }
