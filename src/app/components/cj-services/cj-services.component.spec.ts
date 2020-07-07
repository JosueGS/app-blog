import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CjServicesComponent } from './cj-services.component';

describe('CjServicesComponent', () => {
  let component: CjServicesComponent;
  let fixture: ComponentFixture<CjServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CjServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CjServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
