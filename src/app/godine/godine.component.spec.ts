import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodineComponent } from './godine.component';

describe('GodineComponent', () => {
  let component: GodineComponent;
  let fixture: ComponentFixture<GodineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
