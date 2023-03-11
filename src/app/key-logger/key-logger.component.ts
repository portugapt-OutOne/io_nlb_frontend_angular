import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { fromEvent, filter as filterrx, map as maprx, tap } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.css'],
})
export class KeyLoggerComponent implements OnInit {
  @ViewChild('keyContainer', { static: true })
  input: ElementRef | undefined;

  @Input()
  numeric = false;

  keys = '';

  ngOnInit(): void {
    const logger$ = fromEvent<KeyboardEvent>(
      this.input?.nativeElement,
      'keyup'
    );

    logger$
      .pipe(
        maprx((evt) => evt.key.charCodeAt(0)),
        filterrx((code) => {
          if (this.numeric) {
            return (code > 31 && (code < 48 || code > 57)) === false;
          }
          return true;
        }),
        tap((digit) => (this.keys += String.fromCharCode(digit)))
      )
      .subscribe();
  }
}
