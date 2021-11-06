import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    { path: 'main-view', loadChildren: './main-view/main-view.module#MainViewModule' },
];
