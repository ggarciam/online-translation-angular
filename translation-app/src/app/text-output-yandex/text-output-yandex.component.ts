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
        console.log(this.text);
    }

    translateText(e: any) {
        let data;

        data = {
            text: e.text,
            lang: e.source + '-' + e.target
        };

        this.translateService.getYandexTranslation(
            this.translateService.getAPIInfo('yandex'), data)
            .subscribe(text => this.text = text.text[0]);
    }

}
