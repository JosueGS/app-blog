import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastsWorksComponent } from './lasts-works.component';

describe('LastsWorksComponent', () => {
  let component: LastsWorksComponent;
  let fixture: ComponentFixture<LastsWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastsWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastsWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
