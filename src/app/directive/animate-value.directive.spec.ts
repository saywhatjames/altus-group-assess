import {AnimateValueDirective} from './animate-value.directive';
import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

@Component({
  template: '<span>100</span>span>'
})
class TestComponent {
  constructor() { }
}

describe('AnimateValueDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimateValueDirective, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
  });

  it('should create an instance', () => {
    const directive = new AnimateValueDirective(el);
    expect(directive).toBeTruthy();
  });
});
