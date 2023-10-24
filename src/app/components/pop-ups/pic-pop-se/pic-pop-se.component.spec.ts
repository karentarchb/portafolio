import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicPopSeComponent } from './pic-pop-se.component';

describe('PicPopSeComponent', () => {
  let component: PicPopSeComponent;
  let fixture: ComponentFixture<PicPopSeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicPopSeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicPopSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
