import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefirstComponent } from './homefirst.component';

describe('HomefirstComponent', () => {
  let component: HomefirstComponent;
  let fixture: ComponentFixture<HomefirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomefirstComponent]
    });
    fixture = TestBed.createComponent(HomefirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
