import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichagegetroleComponent } from './affichagegetrole.component';

describe('AffichagegetroleComponent', () => {
  let component: AffichagegetroleComponent;
  let fixture: ComponentFixture<AffichagegetroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichagegetroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichagegetroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
