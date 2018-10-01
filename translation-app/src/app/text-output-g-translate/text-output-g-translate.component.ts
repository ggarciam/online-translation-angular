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

}
