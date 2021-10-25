import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAspectRatioComponent } from './ngx-aspect-ratio.component';

describe('NgxAspectRatioComponent', () => {
  let component: NgxAspectRatioComponent;
  let fixture: ComponentFixture<NgxAspectRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAspectRatioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAspectRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
