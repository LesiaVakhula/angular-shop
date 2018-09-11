import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultShopCartComponent } from './result-shop-cart.component';

describe('ResultShopCartComponent', () => {
  let component: ResultShopCartComponent;
  let fixture: ComponentFixture<ResultShopCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultShopCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultShopCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
