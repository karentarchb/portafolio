import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicPopTzComponent } from './pic-pop-tz.component';

describe('PicPopTzComponent', () => {
  let component: PicPopTzComponent;
  let fixture: ComponentFixture<PicPopTzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicPopTzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicPopTzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
