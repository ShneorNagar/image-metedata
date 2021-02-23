import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {report, ReportCreatorService} from "../services/report-creator.service";
import {DownloadFileService} from "../services/download-file.service";

@Component({
  selector: 'app-report-container',
  templateUrl: './report-container.component.html',
  styleUrls: ['./report-container.component.css'],
})
export class ReportContainerComponent implements OnInit {

  reports :any;
  fileName: string;

  constructor(private reportCreatorService: ReportCreatorService,
              private downloadFileService: DownloadFileService) { }

  ngOnInit(): void {
    this.reportCreatorService.reports.subscribe((report: report)=>{
      this.reports = report.metadataObj;
      this.fileName = report.fileName;
      report.metadataObj.MakerNote = {};
    })

  }

  downloadAsJson(DownloadTag: HTMLAnchorElement) {
    this.downloadFileService.init(DownloadTag);
    this.downloadFileService.downloadAsJsonFile(this.reports, this.fileName);
  }

  downloadAsTxt(DownloadTag: HTMLAnchorElement){
    this.downloadFileService.init(DownloadTag);
    this.downloadFileService.downloadAsTxtFile(this.reports, this.fileName)
  }
}
