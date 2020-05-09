import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowgetuserComponent } from './showgetuser.component';

describe('ShowgetuserComponent', () => {
  let component: ShowgetuserComponent;
  let fixture: ComponentFixture<ShowgetuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowgetuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowgetuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
