import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { AngularTutorialComponent } from './angular-tutorial/angular-tutorial.component';
import { HttpModule } from '@angular/http';
import { CustomerService } from './customer.service';
import { ChartsComponent } from './charts/charts.component';
import { ExampleComponent } from './example/example.component';
import { PhotographyComponent } from './photography/photography.component';
import { LightboxModule } from 'ngx-lightbox';
import { MenusComponent } from './menus/menus.component';
import { CustomThemeComponent } from './custom-theme/custom-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AngularTutorialComponent,
    ChartsComponent,
    ExampleComponent,
    PhotographyComponent,
    MenusComponent,
    CustomThemeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpModule,
    LightboxModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
