import { Component, OnInit } from '@angular/core';
import { TranslateService } from "../translate.service";

@Component({
  selector: 'app-text-output-pons',
  templateUrl: './text-output-pons.component.html',
  styleUrls: ['./text-output-pons.component.scss']
})
export class TextOutputPonsComponent implements OnInit {
    text = '';
    constructor(private translateService: TranslateService) { }

    ngOnInit() {
        this.translateService.currentText.subscribe(text => this.text = text);
    }

}
