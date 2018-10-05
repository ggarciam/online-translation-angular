import { Component, OnInit } from '@angular/core';
import { TranslateService } from "../translate.service";

@Component({
  selector: 'app-text-output-g-translate',
  templateUrl: './text-output-g-translate.component.html',
  styleUrls: ['./text-output-g-translate.component.scss']
})
export class TextOutputGTranslateComponent implements OnInit {
  text = '';
  constructor(private translateService: TranslateService) { }

  ngOnInit() {
      this.translateService.currentTextGoogle.subscribe(text => this.text = text);
  }

  translateText(e: any) {
      let data;

      data = {
          params: {
              client: 'gtx',
              sl: e.source,
              tl: e.target,
              dt: 't',
              q: e.text
          },
          values: {
              service: 'google',
              varName: 'sourceGoogle',
              callBack: this.parseResult
          },
      };
      this.translateService.getTranslation(data).subscribe();
  }

    parseResult(text:any[]): any {
        let textOutput = text[0][0][0];
        if(text[0].length > 1) {
            textOutput = '';
            text[0].forEach( t => textOutput += t[0] );
        }
        return textOutput;
    }
}
