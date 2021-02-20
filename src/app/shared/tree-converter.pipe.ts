import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'reportToTree'
})
export class TreeConverterPipe implements PipeTransform{

    transform(value: any): any {
        console.log('pipe works...')
        return this.buildNestedReportAsTree(value);
    }

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