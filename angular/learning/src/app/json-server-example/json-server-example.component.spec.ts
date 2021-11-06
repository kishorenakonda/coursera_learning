import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonServerExampleComponent } from './json-server-example.component';

describe('JsonServerExampleComponent', () => {
  let component: JsonServerExampleComponent;
  let fixture: ComponentFixture<JsonServerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonServerExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonServerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
