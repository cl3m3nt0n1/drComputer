import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantConfigComponent } from './composant-config.component';

describe('ComposantConfigComponent', () => {
  let component: ComposantConfigComponent;
  let fixture: ComponentFixture<ComposantConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
