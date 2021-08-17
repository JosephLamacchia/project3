import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetManagerComponent } from './set-manager.component';

describe('SetManagerComponent', () => {
  let component: SetManagerComponent;
  let fixture: ComponentFixture<SetManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
