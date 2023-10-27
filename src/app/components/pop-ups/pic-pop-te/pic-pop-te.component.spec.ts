import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicPopTeComponent } from './pic-pop-te.component';

describe('PicPopTeComponent', () => {
  let component: PicPopTeComponent;
  let fixture: ComponentFixture<PicPopTeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicPopTeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicPopTeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
