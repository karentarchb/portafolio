import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicPopNiComponent } from './pic-pop-ni.component';

describe('PicPopNiComponent', () => {
  let component: PicPopNiComponent;
  let fixture: ComponentFixture<PicPopNiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicPopNiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicPopNiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
