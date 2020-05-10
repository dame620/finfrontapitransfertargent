import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddretraitComponent } from './addretrait.component';

describe('AddretraitComponent', () => {
  let component: AddretraitComponent;
  let fixture: ComponentFixture<AddretraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddretraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddretraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
