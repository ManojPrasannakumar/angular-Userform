import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveUserformComponent } from './reactive-userform.component';

describe('ReactiveUserformComponent', () => {
  let component: ReactiveUserformComponent;
  let fixture: ComponentFixture<ReactiveUserformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveUserformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveUserformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
