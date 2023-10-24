import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicPopFrComponent } from './pic-pop-fr.component';

describe('PicPopFrComponent', () => {
  let component: PicPopFrComponent;
  let fixture: ComponentFixture<PicPopFrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicPopFrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicPopFrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
