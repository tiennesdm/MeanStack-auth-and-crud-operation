import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchlistComponent } from './fetchlist.component';

describe('FetchlistComponent', () => {
  let component: FetchlistComponent;
  let fixture: ComponentFixture<FetchlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
