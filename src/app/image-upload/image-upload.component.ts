import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as EXIF from "exif-js/exif";
import {ReportCreatorService} from "../services/report-creator.service";

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {

  constructor(private reportCreatorService: ReportCreatorService) { }

  onUpload(event) {
    this.reportCreatorService.createReports(event.files[0]);
  }
}
