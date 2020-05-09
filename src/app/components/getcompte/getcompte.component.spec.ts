import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcompteComponent } from './getcompte.component';

describe('GetcompteComponent', () => {
  let component: GetcompteComponent;
  let fixture: ComponentFixture<GetcompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
