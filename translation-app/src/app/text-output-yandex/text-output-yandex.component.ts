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
        this.translateService.currentText.subscribe(text => this.text = text);
        console.log(this.text);
    }

}
