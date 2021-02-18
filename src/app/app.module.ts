import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ReportContainerComponent } from './report-container/report-container.component';
import {ReportItemComponent} from "./report-item/report-item.component";
import {CardModule} from "primeng/card";
import {TreeModule} from "primeng/tree";
import {ProgressBarModule} from "primeng/progressbar";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        ImageUploadComponent,
        ReportContainerComponent,
        ReportItemComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ButtonModule,
        FileUploadModule,
        HttpClientModule,
        CardModule,
        TreeModule,
        ProgressBarModule,
        ToastModule
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule { }
