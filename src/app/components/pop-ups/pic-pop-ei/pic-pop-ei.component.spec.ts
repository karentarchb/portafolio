import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicPopEiComponent } from './pic-pop-ei.component';

describe('PicPopEiComponent', () => {
  let component: PicPopEiComponent;
  let fixture: ComponentFixture<PicPopEiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicPopEiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicPopEiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
