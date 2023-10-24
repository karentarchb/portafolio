import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicPopSiComponent } from './pic-pop-si.component';

describe('PicPopSiComponent', () => {
  let component: PicPopSiComponent;
  let fixture: ComponentFixture<PicPopSiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicPopSiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicPopSiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
