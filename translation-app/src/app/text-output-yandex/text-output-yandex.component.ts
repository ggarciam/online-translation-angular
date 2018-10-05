import { Component, OnInit } from '@angular/core';
import { TranslateService } from "../translate.service";

@Component({
  selector: 'app-text-output-yandex',
  templateUrl: './text-output-yandex.component.html',
  styleUrls: ['./text-output-yandex.component.scss']
})
export class TextOutputYandexComponent implements OnInit {
    text = '';
    constructor(private translateService: TranslateService) { }

    ngOnInit() {
        this.translateService.currentTextYandex.subscribe(text => this.text = text);
    }

    translateText(e: any) {
        let data;

        data = {
            params: {
                text: e.text,
                lang: e.source + '-' + e.target
            },
            values: {
                service: 'yandex',
                varName: 'sourceYandex',
                callBack: this.parseResult
            },
        };

        this.translateService.getTranslation(data).subscribe();
    }

    parseResult(text:any): any {
        return text.text;
    }

}
