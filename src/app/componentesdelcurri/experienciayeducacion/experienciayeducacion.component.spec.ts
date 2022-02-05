import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciayeducacionComponent } from './experienciayeducacion.component';

describe('ExperienciayeducacionComponent', () => {
  let component: ExperienciayeducacionComponent;
  let fixture: ComponentFixture<ExperienciayeducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciayeducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciayeducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
