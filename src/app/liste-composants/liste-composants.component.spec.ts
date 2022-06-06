import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeComposantsComponent } from './liste-composants.component';

describe('ListeComposantsComponent', () => {
  let component: ListeComposantsComponent;
  let fixture: ComponentFixture<ListeComposantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeComposantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeComposantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
