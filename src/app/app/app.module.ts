import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../header/header.component";
import { UserComponent } from "../user/user.component";
import { TasksModule } from "../tasks/tasks.module";

@NgModule({
    declarations:[AppComponent,HeaderComponent,UserComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,RouterOutlet,TasksModule],
})
export class AppModule {}