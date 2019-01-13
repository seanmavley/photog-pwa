import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { CockpitService } from './services/cockpit.service';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgProgressModule,
    NgProgressRouterModule,
    GraphQLModule,
  ],
  providers: [CockpitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
