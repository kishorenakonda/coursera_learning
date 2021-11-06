import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainViewRoutes } from './main-view.routes';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainViewComponent } from './main-view.component';

@NgModule({
    imports: [
        RouterModule.forChild(MainViewRoutes),
    ],
    declarations: [
        MainViewComponent,
        LandingPageComponent
    ],
    providers: []
})

export class MainViewModule {

}
