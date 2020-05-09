import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetadduserComponent } from './getadduser.component';

describe('GetadduserComponent', () => {
  let component: GetadduserComponent;
  let fixture: ComponentFixture<GetadduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetadduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetadduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
