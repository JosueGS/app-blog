import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLworksComponent } from './item-lworks.component';

describe('ItemLworksComponent', () => {
  let component: ItemLworksComponent;
  let fixture: ComponentFixture<ItemLworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemLworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
