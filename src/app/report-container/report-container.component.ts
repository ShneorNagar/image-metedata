import { Component, OnInit } from '@angular/core';
import {report, ReportCreatorService} from "../services/report-creator.service";
import {MessageService, TreeNode} from "primeng/api";

@Component({
  selector: 'app-report-container',
  templateUrl: './report-container.component.html',
  styleUrls: ['./report-container.component.css'],
})
export class ReportContainerComponent implements OnInit {

  reports :TreeNode[];
  loadingFinished: boolean = false;
  progressValue: number = 0;

  constructor(private reportCreatorService: ReportCreatorService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.reportCreatorService.reports.subscribe((reports: TreeNode[])=>{

      this.loadingFinished = true;

      let interval = setInterval(() => {
        this.progressValue = this.progressValue + Math.floor(Math.random() * 35) + 1;
        if (this.progressValue >= 100) {
          this.progressValue = 100;
          this.messageService.add({severity: 'info', summary: 'Success', detail: 'Process Completed'});
          clearInterval(interval);

          this.loadingFinished = false;
          this.progressValue = 0;
          this.reports = reports;
        }
      }, 500);
    })
  }
}
