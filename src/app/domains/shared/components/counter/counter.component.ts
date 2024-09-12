
import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required:true}) duration = 0
  @Input({required:true}) message = ''
  counter = signal(0)
  counterRef: number | undefined

  constructor(){
    // no async
    // before render
    // run one time
    console.log('Constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges){
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration']
    console.log(duration);
    if(duration && duration.currentValue !== duration.previousValue){
      this.doSomething()
    }

  }

  ngOnInit(){
    // after render
    // run one time
    // can you use async, promise, subscribe
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('during ->', this.duration);
    console.log('message ->', this.message);
    this.counterRef = window.setInterval(()=>{
      console.log('Run interval');
      this.counter.update(statePrev => statePrev + 1)
    },1000)
  }

  ngAfterViewInit(){
    // after render
    // ask if the children were render
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef)
  }
  doSomething(){
    console.log('Change duration');


  }
}
