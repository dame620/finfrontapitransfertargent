import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowlisttransactionComponent } from './showlisttransaction.component';

describe('ShowlisttransactionComponent', () => {
  let component: ShowlisttransactionComponent;
  let fixture: ComponentFixture<ShowlisttransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowlisttransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowlisttransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
