import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetadddepotComponent } from './getadddepot.component';

describe('GetadddepotComponent', () => {
  let component: GetadddepotComponent;
  let fixture: ComponentFixture<GetadddepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetadddepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetadddepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
