import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule, MatToolbarModule],
})
export class AuthModule {}
