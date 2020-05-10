import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowaddtransactionComponent } from './showaddtransaction.component';

describe('ShowaddtransactionComponent', () => {
  let component: ShowaddtransactionComponent;
  let fixture: ComponentFixture<ShowaddtransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowaddtransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowaddtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
