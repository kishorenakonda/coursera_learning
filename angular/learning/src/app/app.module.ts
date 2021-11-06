import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule} from '@angular/forms';
import { JsonServerExampleComponent } from './json-server-example/json-server-example.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

const myRoutes: Route[] = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'jsonexample',
    component: JsonServerExampleComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JsonServerExampleComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
