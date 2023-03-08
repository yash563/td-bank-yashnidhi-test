import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationRoutingModule } from './confirmation-routing.module';
import { ConfirmationComponent } from './confirmation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmationRoutingModule
  ],
  declarations: [ConfirmationComponent]
})
export class ConfirmationModule { }
