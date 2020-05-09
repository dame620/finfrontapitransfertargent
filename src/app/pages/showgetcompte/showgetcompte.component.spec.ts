import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowgetcompteComponent } from './showgetcompte.component';

describe('ShowgetcompteComponent', () => {
  let component: ShowgetcompteComponent;
  let fixture: ComponentFixture<ShowgetcompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowgetcompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowgetcompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
