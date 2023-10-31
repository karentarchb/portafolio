import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowComponent } from './acknow.component';

describe('AcknowComponent', () => {
  let component: AcknowComponent;
  let fixture: ComponentFixture<AcknowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcknowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
