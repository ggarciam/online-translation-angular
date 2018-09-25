import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOutputPonsComponent } from './text-output-pons.component';

describe('TextOutputPonsComponent', () => {
  let component: TextOutputPonsComponent;
  let fixture: ComponentFixture<TextOutputPonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextOutputPonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextOutputPonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
