import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIqComponent } from './test-iq.component';

describe('TestIqComponent', () => {
  let component: TestIqComponent;
  let fixture: ComponentFixture<TestIqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestIqComponent]
    });
    fixture = TestBed.createComponent(TestIqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
