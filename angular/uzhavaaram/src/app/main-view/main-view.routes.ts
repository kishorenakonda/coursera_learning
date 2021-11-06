import { Routes } from '@angular/router';
import { MainViewComponent } from './main-view.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const MainViewRoutes: Routes = [
    {
        path: '', component: MainViewComponent,
        children: [
            {
                path: 'landing-page',
                component: LandingPageComponent
            }
        ]
    }
];
