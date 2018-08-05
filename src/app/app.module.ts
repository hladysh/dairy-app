import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {ItemsComponent} from './items/items.component';
import {CommentsComponent} from './items/comments/comments.component';
import {SidebarComponent} from './shared/component/sidebar/sidebar.component';
import {ItemsService} from './items/items.service';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ItemsComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
