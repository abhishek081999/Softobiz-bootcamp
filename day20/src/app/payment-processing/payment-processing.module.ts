import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { NetBankingComponent } from './net-banking/net-banking.component';
import { UPIComponent } from './upi/upi.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CreditCardComponent,
    DebitCardComponent,
    NetBankingComponent,
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
    NetBankingComponent,
    UPIComponent
  ]
})
export class PaymentProcessingModule { }
