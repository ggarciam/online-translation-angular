import { Component, OnInit } from '@angular/core';
import { G_TRANSLATE_URL, LANGUAGES } from "../global";
import { TranslateService } from "../translate.service";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  text:string = '';
  languages = LANGUAGES;
  sourceSelected:string = 'en';
  targetSelected:string = 'es';
  translatedText:string = '';

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

  getTranslation(): void {
      let urls = [
          {
            service: 'google',
            url: G_TRANSLATE_URL + '?client=gtx&sl=' + this.sourceSelected + '&tl=' + this.targetSelected + '&dt=t&q=' + encodeURI(this.text)
          },
          {
            service: 'yandex',
            url: ''
          }
      ];

      this.translateService.getGoogleTranslation(
          this.translateService.getServiceURL(urls, 'google')
      )
          .subscribe(text => this.translatedText = text[0][0][0]);
  }
}
