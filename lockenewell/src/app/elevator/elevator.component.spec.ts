/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ElevatorComponent } from './elevator.component';

describe('ElevatorComponent', () => {
  let component: ElevatorComponent;
  let fixture: ComponentFixture<ElevatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render Elevator Section', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#elevator').textContent).toBeTruthy();
  });
});
