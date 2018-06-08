import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DASHBOARD_COMPONENTS, DASHBOARD_ROUTES } from './dashboard.route';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [ RouterModule.forChild(DASHBOARD_ROUTES), FormsModule],
  declarations: [DASHBOARD_COMPONENTS],
  providers: [],
  exports:[DASHBOARD_COMPONENTS]
})

export class DashboardModule { }
