import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'removeCommentsPipe'
})
export class RemoveCommentsPipePipe implements PipeTransform {

    transform(report: unknown): unknown {
        return this.buildJson(report);
    }

    buildJson(report: any) {

        let finalReport = {};

        for (let key in report) {
            if (report.hasOwnProperty(key)) {
                if (typeof report[key] === 'object') {
                    if (!this.isBinaryValue(report[key])){
                        finalReport = {
                            ...finalReport,
                            [key]: {...report[key]}
                        }
                    }else{
                        finalReport = {
                            ...finalReport,
                            [key]: {}
                        }
                    }
                } else {
                    finalReport = {
                        ...finalReport,
                        [key]: report[key]
                    }
                }
            }
        }
        return finalReport;
    }

    // TODO maybe check random indexes for numbers
    isBinaryValue(value) {
        return Object.keys(value).length > 10 && !isNaN(value[0])
    }
}
