// tüm pipeların aynı metodu kullandığından emin oluyoruz ve pipe clasını ekliyoruz
import { Pipe, PipeTransform } from "@angular/core";
// summaryPipe App.module dosyasına eklenmeli
@Pipe({
    name: 'summary'
})

export class SummaryPipe  implements PipeTransform{
    transform(value: string, limit?: number) {
        if(!value) return null;
        let _limit = (limit) ? limit : 20;
        return value.substr(0,20)+ '...';
    }
}
    