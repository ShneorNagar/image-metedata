import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'reportToTree'
})
export class TreeConverterPipe implements PipeTransform{

    transform(value: any): any {
        return this.buildNestedReportAsTree(value);
    }

    buildNestedReportAsTree(reports) {

        let repAsArray: any[] = [];
        const sortedKeys = Object.keys(reports).sort();

        function recurse(reports, current?) {
            for (const key of sortedKeys) {
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

        function extractMakerNoteInfo(makerNote: number[]){
            return String.fromCharCode(...makerNote);
        }

        recurse(reports);

        if (reports.MakerNote){
            repAsArray.push({
                label: `MakerNote`,
                children: [{
                    label: `MarkerNote - ${extractMakerNoteInfo(reports.MakerNote)}`
                }]
            })
        }

        return repAsArray;
    }
}