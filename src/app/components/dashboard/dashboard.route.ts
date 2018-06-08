import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './other/home/home.component';
import { AboutComponent } from './other/about/about.component';
import { ContactsComponent } from './other/contacts/contacts.component';


export const DASHBOARD_ROUTES: Route[] = [

    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: '', component: HomeComponent },            
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'contacts', component: ContactsComponent }
        ]
    }   

]

export const DASHBOARD_COMPONENTS = [
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent
]
