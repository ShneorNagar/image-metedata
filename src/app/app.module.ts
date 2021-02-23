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
import {CardModule} from "primeng/card";
import {TreeModule} from "primeng/tree";
import {ProgressBarModule} from "primeng/progressbar";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {RippleModule} from "primeng/ripple";

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        ImageUploadComponent,
        ReportContainerComponent
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
        ToastModule,
        RippleModule
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule { }
