import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserformheaderComponent } from './userformheader.component';

describe('UserformheaderComponent', () => {
  let component: UserformheaderComponent;
  let fixture: ComponentFixture<UserformheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserformheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserformheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
