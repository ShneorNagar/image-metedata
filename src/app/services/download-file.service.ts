import {ElementRef, Inject, Injectable} from "@angular/core";
import {FilesSuffixEnum} from "../shared/files.suffix.enum";

@Injectable({providedIn: "root"})
export class DownloadFileService {

    downloadEl: HTMLAnchorElement;

    init(downloadEl: HTMLAnchorElement){
        this.downloadEl = downloadEl;
    }

    downloadAsJsonFile(reports: any, fileName: string){
        // const dataUrl = `data:application/json,${encodeURIComponent(JSON.stringify(reports))}`
        // fileName = `${fileName} metaData.json`;
        // this.downloadEl.setAttribute('download', `${fileName} metaData.json`);
        // this.downloadEl.setAttribute('href', dataUrl);
        this.download(reports, `${fileName} ${FilesSuffixEnum.JSON.valueOf()}`)
    }

    downloadAsTxtFile(reports: any, fileName: string){
        this.download(reports, `${fileName} ${FilesSuffixEnum.TXT.valueOf()}`)
    }

    /**
     *
     * @param reports - the image metadata
     * @param fileName - the file name to give the downloaded file
     */
    private download(reports: string, fileName: string){
        const dataUrl = `data:application/json,${encodeURIComponent(JSON.stringify(reports))}`
        this.downloadEl.setAttribute('download', fileName);
        this.downloadEl.setAttribute('href', dataUrl);
    }
}