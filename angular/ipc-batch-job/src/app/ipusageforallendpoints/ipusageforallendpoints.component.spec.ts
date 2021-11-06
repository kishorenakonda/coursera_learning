import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpusageforallendpointsComponent } from './ipusageforallendpoints.component';

describe('IpusageforallendpointsComponent', () => {
  let component: IpusageforallendpointsComponent;
  let fixture: ComponentFixture<IpusageforallendpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpusageforallendpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpusageforallendpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
