import {Injectable} from "@angular/core";
import * as EXIF from 'exif-js/exif';
import {Subject} from "rxjs";
import {TreeNode} from "primeng/api";

export interface report {
    metadataObj: any;
    fileName: string;
}

@Injectable({providedIn: "root"})
export class ReportCreatorService {

    reports: Subject<report> = new Subject<report>();

    createReports(file: any) {
        const fileReader: FileReader = new FileReader();
        fileReader.onload = () => {

            EXIF.getData(file, () => {
                this.reports.next({
                    metadataObj: EXIF.getAllTags(file),
                    fileName: file.name
                });
            })
        }
        fileReader.readAsDataURL(file);
    }
}