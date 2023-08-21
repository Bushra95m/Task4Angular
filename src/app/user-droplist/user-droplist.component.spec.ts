import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDroplistComponent } from './user-droplist.component';

describe('UserDroplistComponent', () => {
  let component: UserDroplistComponent;
  let fixture: ComponentFixture<UserDroplistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDroplistComponent]
    });
    fixture = TestBed.createComponent(UserDroplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
