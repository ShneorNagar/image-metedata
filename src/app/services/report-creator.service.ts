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
                this.reports.next(EXIF.getAllTags(file));
            })
        }
        fileReader.readAsDataURL(file);
    }

    // deprecated
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
}