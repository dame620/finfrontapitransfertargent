import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetaddcompteComponent } from './getaddcompte.component';

describe('GetaddcompteComponent', () => {
  let component: GetaddcompteComponent;
  let fixture: ComponentFixture<GetaddcompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetaddcompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetaddcompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
