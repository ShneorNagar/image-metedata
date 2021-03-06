import {AfterViewInit, Component} from '@angular/core';
import {ReportCreatorService} from "../services/report-creator.service";

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements AfterViewInit{

  constructor(private reportCreatorService: ReportCreatorService) { }

  onUpload(event) {
    const imageUploadPlaceholder = document.getElementById('imgUpload');
    if (imageUploadPlaceholder){
      imageUploadPlaceholder.remove();
    }
    this.reportCreatorService.createReports(event.files[0]);
  }

  ngAfterViewInit(): void {
    this.createPlaceHolder();
  }

  // TODO use css classes
  createPlaceHolder() {
    let uploadElement = document.querySelector('.p-fileupload-content');
    const container = document.createElement('div');
    container.setAttribute('id', 'imgUpload')
    container.style.textAlign = 'center';
    container.style.position = 'relative';
    container.style.top = '-10%';
    container.style.height = '100%';

    const img = document.createElement('img');
    img.style.width = '50%';
    img.style.filter = 'invert(0.5)';
    img.setAttribute('src', 'assets/drag and drop.png')
    container.appendChild(img);
    uploadElement.appendChild(container);
  }
}
