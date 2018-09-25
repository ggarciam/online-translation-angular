import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOutputGTranslateComponent } from './text-output-g-translate.component';

describe('TextOutputGTranslateComponent', () => {
  let component: TextOutputGTranslateComponent;
  let fixture: ComponentFixture<TextOutputGTranslateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextOutputGTranslateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextOutputGTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
