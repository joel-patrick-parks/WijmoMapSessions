import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBrowserComponent } from './top-browser.component';

describe('TopBrowserComponent', () => {
  let component: TopBrowserComponent;
  let fixture: ComponentFixture<TopBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
