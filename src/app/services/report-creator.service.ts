import {Injectable} from "@angular/core";
import * as EXIF from 'exif-js/exif';
import {Subject} from "rxjs";
import {TreeNode} from "primeng/api";

export interface report {
    name: string;
    value: any;
}

@Injectable({providedIn: "root"})
export class ReportCreatorService {

    file: any;
    reports: Subject<TreeNode[]> = new Subject<TreeNode[]>();

    createReports(file: any) {
        this.file = file;

        const fileReader: FileReader = new FileReader();
        fileReader.onload = () => {

            EXIF.getData(file, () => {
                const fileTags = EXIF.getAllTags(file)
                let reportsTree = this.buildNestedReportAsTree(fileTags);
                this.reports.next(reportsTree);
            })
        }
        fileReader.readAsDataURL(file);
    }

    buildNestedReport(reports) {

        let finalReport: report[] = [];

        //todo mark parent children
        function recurse(reports) {
            for (const key in reports) {
                let value = reports[key];
                if (value != undefined) {
                    if (value && typeof value === 'object') {
                        recurse(value);
                    } else {
                        if (isNaN(Number(key)) && typeof value != 'function') {
                            finalReport.push(
                                {
                                    name: key,
                                    value: value
                                }
                            )
                        }
                    }
                }
            }
        }

        recurse(reports);
        return finalReport;
    }

    // todo 2 level children are not included
    buildNestedReportAsTree(reports) {

        let repAsArray: any[] = [];

        function recurse(reports, current?) {
            for (const key in reports) {
                let value = reports[key];
                if (value != undefined) {
                    if (value && typeof value === 'object') {
                        repAsArray.push(
                            {
                                label: key,
                                children: []
                            }
                        )
                        recurse(value, key);
                    } else {
                        if (isNaN(Number(key)) && typeof value != 'function') {
                            if (current) {
                                let currObj = repAsArray.filter(obj => {
                                    return obj.label == current
                                })
                                currObj[0].children.push({
                                    label: `${key} - ${value}`
                                })
                            }
                            repAsArray.push(
                                {
                                    label: `${key} - ${value}`
                                }
                            )
                        }
                    }
                }
            }
        }
        recurse(reports);
        return repAsArray;
    }
}