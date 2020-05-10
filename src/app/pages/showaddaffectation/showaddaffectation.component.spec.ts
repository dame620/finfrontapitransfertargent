import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowaddaffectationComponent } from './showaddaffectation.component';

describe('ShowaddaffectationComponent', () => {
  let component: ShowaddaffectationComponent;
  let fixture: ComponentFixture<ShowaddaffectationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowaddaffectationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowaddaffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
