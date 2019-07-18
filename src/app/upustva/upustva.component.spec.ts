import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpustvaComponent } from './upustva.component';

describe('UpustvaComponent', () => {
  let component: UpustvaComponent;
  let fixture: ComponentFixture<UpustvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpustvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpustvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
