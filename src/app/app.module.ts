import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AlertMessageComponent } from "./alert-message/alert-message.component";
import { CardComponent } from "./card/card.component";
import { TextInputComponent } from "./text-input/text-input.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AlertMessageComponent,
    CardComponent,
    TextInputComponent,
    PaginationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
