import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as EXIF from "exif-js/exif";
import {ReportCreatorService} from "../services/report-creator.service";

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  constructor(private reportCreatorService: ReportCreatorService) { }

  ngOnInit(): void {
  }

  uploadedFile: any;

  onUpload(event) {
    this.reportCreatorService.createReports(event.files[0]);
  }

  @ViewChild('img') imgEl: ElementRef;

  // showData() {
  //   let allMetaData: any;
  //   EXIF.getData(this.imgEl.nativeElement, function () {
  //     // `this` is provided image, check with `console.log(this)`
  //     allMetaData = EXIF.getAllTags(this);
  //     console.log(allMetaData)
  //   })
  // }

  // processFile(event) {
  //
  //   for(let file of event.files) {
  //     this.uploadedFiles.push(file);
  //   }
  //
  //   const reader: FileReader = new FileReader();
  //
  //   reader.addEventListener('load', ()=>{
  //
  //     this.uploadedFiles.forEach( file =>{
  //
  //       EXIF.getData(file, ()=>{
  //         const allTags = EXIF.getAllTags(file)
  //         console.log(allTags)
  //         // for (let key in allTags) {
  //         //   if (allTags.hasOwnProperty(key)) {
  //         //     console.log(key + " -> " + allTags[key]);
  //         //   }
  //         // }
  //       })
  //     })
  //   })
  //   reader.readAsDataURL(file)
  // }

}
