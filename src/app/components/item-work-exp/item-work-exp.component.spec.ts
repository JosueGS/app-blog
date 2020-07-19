import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWorkExpComponent } from './item-work-exp.component';

describe('ItemWorkExpComponent', () => {
  let component: ItemWorkExpComponent;
  let fixture: ComponentFixture<ItemWorkExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemWorkExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemWorkExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
