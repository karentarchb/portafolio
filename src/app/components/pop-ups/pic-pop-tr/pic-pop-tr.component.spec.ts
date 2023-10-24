import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicPopTrComponent } from './pic-pop-tr.component';

describe('PicPopTrComponent', () => {
  let component: PicPopTrComponent;
  let fixture: ComponentFixture<PicPopTrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicPopTrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicPopTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
