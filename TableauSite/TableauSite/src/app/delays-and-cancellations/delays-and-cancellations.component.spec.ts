import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelaysAndCancellationsComponent } from './delays-and-cancellations.component';

describe('DelaysAndCancellationsComponent', () => {
  let component: DelaysAndCancellationsComponent;
  let fixture: ComponentFixture<DelaysAndCancellationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelaysAndCancellationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelaysAndCancellationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
