import { Component, OnInit} from '@angular/core';
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
          client: 'gtx',
          sl: e.source,
          tl: e.target,
          dt: 't',
          q: e.text
      };
      this.translateService.getGoogleTranslation(
          this.translateService.getAPIInfo('google'), data)
          .subscribe(text => this.text = text[0][0][0]);
  }
}
