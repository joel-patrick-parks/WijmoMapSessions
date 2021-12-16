import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCountryInfoComponent } from './top-country-info.component';

describe('TopCountryInfoComponent', () => {
  let component: TopCountryInfoComponent;
  let fixture: ComponentFixture<TopCountryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCountryInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCountryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
