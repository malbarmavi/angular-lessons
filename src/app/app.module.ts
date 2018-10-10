import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./modules/material.module";
import { LessonsModule } from "./lessons/lessons.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LessonsModule,
    RouterModule.forRoot([], { useHash: true })
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
