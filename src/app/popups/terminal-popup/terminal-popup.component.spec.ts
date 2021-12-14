import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalPopupComponent } from './terminal-popup.component';

describe('TerminalPopupComponent', () => {
  let component: TerminalPopupComponent;
  let fixture: ComponentFixture<TerminalPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
