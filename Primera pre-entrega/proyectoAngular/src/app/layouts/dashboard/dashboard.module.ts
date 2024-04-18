import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
    MenuComponent,
    ContentComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
