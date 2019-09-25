import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appAnimateValue]'
})
export class AnimateValueDirective {
@Input() end;
@Input() start;
@Input() duration = 500; //default duration

  constructor(private el: ElementRef) {
  }

  	animateValue() {
   	const range = this.end - this.start;
    // no timer shorter than 50ms (not really visible any way)
    const minTimer = 50;
    // calc step time to show all intermediate values
    let stepTime = Math.abs(Math.floor(this.duration / range));

    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);

    // get current time and calculate desired end time
    const startTime = new Date().getTime();
    const endTime = startTime + this.duration;

 
    var run = () => {
      const now = new Date().getTime();
      const remaining = Math.max((endTime - now) / this.duration, 0);
      const value = Math.round(this.end - (remaining * range))
      this.el.nativeElement.innerText= String(value);
      if (value === this.end) {
        clearInterval(timer);
      }
    }

   
    let timer = setInterval(run, stepTime);
    run;

   	}


   	   ngOnInit(){
        this.animateValue();
    }


   	   ngOnChanges(){
       this.animateValue();
    }



}
