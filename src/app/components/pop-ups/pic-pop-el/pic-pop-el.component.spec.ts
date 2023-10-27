import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicPopElComponent } from './pic-pop-el.component';

describe('PicPopElComponent', () => {
  let component: PicPopElComponent;
  let fixture: ComponentFixture<PicPopElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicPopElComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicPopElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
