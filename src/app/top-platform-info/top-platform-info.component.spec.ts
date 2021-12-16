import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlatformInfoComponent } from './top-platform-info.component';

describe('TopPlatformInfoComponent', () => {
  let component: TopPlatformInfoComponent;
  let fixture: ComponentFixture<TopPlatformInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPlatformInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPlatformInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
