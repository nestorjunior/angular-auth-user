import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedProfileComponent } from './restricted-profile.component';

describe('RestrictedProfileComponent', () => {
  let component: RestrictedProfileComponent;
  let fixture: ComponentFixture<RestrictedProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestrictedProfileComponent]
    });
    fixture = TestBed.createComponent(RestrictedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
