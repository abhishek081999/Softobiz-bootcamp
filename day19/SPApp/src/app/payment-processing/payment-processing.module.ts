import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { UPIComponent } from './upi/upi.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CreditCardComponent,
    DebitCardComponent,
    
    UPIComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[ 
    CreditCardComponent,
    DebitCardComponent,
    UPIComponent
  ]
})
export class PaymentProcessingModule { }
