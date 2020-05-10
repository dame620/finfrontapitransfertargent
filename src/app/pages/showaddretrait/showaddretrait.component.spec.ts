import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowaddretraitComponent } from './showaddretrait.component';

describe('ShowaddretraitComponent', () => {
  let component: ShowaddretraitComponent;
  let fixture: ComponentFixture<ShowaddretraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowaddretraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowaddretraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
