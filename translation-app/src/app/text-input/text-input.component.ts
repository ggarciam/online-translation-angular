import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { LANGUAGES } from "../global";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Output() translateEvent = new EventEmitter();

  text:string           = '';
  languages             = LANGUAGES;


  sourceSelected:string = 'en';
  targetSelected:string = 'es';

  constructor() { }

  ngOnInit() {
  }

  triggerTranslation(): void {

      let options = {
          source: this.sourceSelected,
          target: this.targetSelected,
          text:   this.text
      };

      this.translateEvent.emit(options);
  }
}
