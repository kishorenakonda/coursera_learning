import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpallocatedforendpointsComponent } from './ipallocatedforendpoints.component';

describe('IpallocatedforendpointsComponent', () => {
  let component: IpallocatedforendpointsComponent;
  let fixture: ComponentFixture<IpallocatedforendpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpallocatedforendpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpallocatedforendpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
