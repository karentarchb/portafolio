import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicPopComponent } from './pic-pop.component';

describe('PicPopComponent', () => {
  let component: PicPopComponent;
  let fixture: ComponentFixture<PicPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicPopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
