import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThankYouRoutingModule } from './thank-you-routing.module';
import { ThankYouComponent } from './thank-you.component';

@NgModule({
  imports: [
    CommonModule,
    ThankYouRoutingModule
  ],
  declarations: [ThankYouComponent]
})
export class ThankYouModule { }
