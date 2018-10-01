import { Component, OnInit } from '@angular/core';
import { LANGUAGES } from "../global";
import { TranslateService } from "../translate.service";
import {TranslationClass} from "../translation-class";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  text:string           = '';
  languages             = LANGUAGES;


  sourceSelected:string = 'en';
  targetSelected:string = 'es';
  translatedText:TranslationClass = new TranslationClass();

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

  getTranslation(): void {

      let options = '';

      options = '?client=gtx&sl=' + this.sourceSelected + '&tl=' + this.targetSelected + '&dt=t&q=' + encodeURI(this.text);
      this.translateService.getGoogleTranslation(
          this.translateService.getAPIInfo('google', options)
      )
          .subscribe(text => this.translatedText.translatedGoogle = text[0][0][0]);

      options = '&text=' + encodeURI(this.text) + '&lang=' + this.sourceSelected + '-' + this.targetSelected;
      this.translateService.getYandexTranslation(
          this.translateService.getAPIInfo('yandex', options)
      )
          .subscribe(text => this.translatedText.translatedYandex = text);
  }
}
