import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTutorialComponent } from './angular-tutorial.component';

describe('AngularTutorialComponent', () => {
  let component: AngularTutorialComponent;
  let fixture: ComponentFixture<AngularTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
