import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicPopFiComponent } from './pic-pop-fi.component';

describe('PicPopFiComponent', () => {
  let component: PicPopFiComponent;
  let fixture: ComponentFixture<PicPopFiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicPopFiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicPopFiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
