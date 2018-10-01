import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOutputYandexComponent } from './text-output-yandex.component';

describe('TextOutputYandexComponent', () => {
  let component: TextOutputYandexComponent;
  let fixture: ComponentFixture<TextOutputYandexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextOutputYandexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextOutputYandexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
