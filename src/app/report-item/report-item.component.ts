import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from "primeng/api";

@Component({
  selector: 'app-report-item',
  templateUrl: './report-item.component.html',
  styleUrls: ['./report-item.component.css']
})
export class ReportItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() header: string;
  @Input() content: string;

}
