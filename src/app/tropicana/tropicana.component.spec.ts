/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TropicanaComponent } from './tropicana.component';

describe('TropicanaComponent', () => {
  let component: TropicanaComponent;
  let fixture: ComponentFixture<TropicanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TropicanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TropicanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
