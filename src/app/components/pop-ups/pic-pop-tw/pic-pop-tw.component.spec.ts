import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicPopTwComponent } from './pic-pop-tw.component';

describe('PicPopTwComponent', () => {
  let component: PicPopTwComponent;
  let fixture: ComponentFixture<PicPopTwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicPopTwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicPopTwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
