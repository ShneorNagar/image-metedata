import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ReportContainerComponent } from './report-container/report-container.component';
import {MessageService} from "primeng/api";
import { RemoveCommentsPipePipe } from './shared/report-to-json.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ImageUploadComponent,
        ReportContainerComponent,
        RemoveCommentsPipePipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ButtonModule,
        FileUploadModule,
        HttpClientModule
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule { }
