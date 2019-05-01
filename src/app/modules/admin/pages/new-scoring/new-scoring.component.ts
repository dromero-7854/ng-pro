import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-new-scoring',
  templateUrl: './new-scoring.component.html',
  styleUrls: ['./new-scoring.component.scss']
})
export class NewScoringComponent implements OnInit {
  
  options: { name: string, value: number }[] = [{ name: 'con_deuda', value: 1 }, { name: 'sin_deuda', value: 2 }, { name: 'sin_equifax', value: 3 }];
  weight: string = '99.9';
  score: string = '999';
  value: string = 'Clear me'; 
  
  smallerWP: boolean = true;
  placement: string = 'left';
  
  constructor(private breakpointObserver: BreakpointObserver) { }
  
  ngOnInit() { 
    this.breakpointObserver
    .observe(['(min-width: 850px)'])
    .subscribe((state: BreakpointState) => {
      this.smallerWP = !state.matches;
      if (this.smallerWP) {
        console.log('Viewport <= 600px');
        this.placement = 'right';
      } else {
        console.log('Viewport > 600px');
        this.placement = 'left';
      }
    });
  }
  
}
