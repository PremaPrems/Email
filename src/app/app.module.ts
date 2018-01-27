import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { ToolsPageComponent } from './tools-page/tools-page.component';
import { TabsModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    ContentPageComponent,
    ToolsPageComponent
  ],
  imports: [
    TabsModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
