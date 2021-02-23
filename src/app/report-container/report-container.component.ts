import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ReportCreatorService} from "../services/report-creator.service";
import {DownloadFileService} from "../services/download-file.service";

@Component({
  selector: 'app-report-container',
  templateUrl: './report-container.component.html',
  styleUrls: ['./report-container.component.css'],
})
export class ReportContainerComponent implements OnInit {

  reports :any;
  @ViewChild('DownloadAsJson')
  downloadTag: ElementRef;

  constructor(private reportCreatorService: ReportCreatorService,
              private downloadFileService: DownloadFileService) { }

  ngOnInit(): void {
    this.reportCreatorService.reports.subscribe((reports: any)=>{
      this.reports = reports;
      reports.MakerNote = {};
    })

  }

  downloadAsJson(DownloadTag: HTMLAnchorElement) {
    this.downloadFileService.init(DownloadTag);
    this.downloadFileService.downloadAsJsonFile(this.reports, this.reportCreatorService.fileName);
  }

  downloadAsTxt(DownloadTag: HTMLAnchorElement){
    this.downloadFileService.init(DownloadTag);
    this.downloadFileService.downloadAsTxtFile(this.reports, this.reportCreatorService.fileName)
  }
}
