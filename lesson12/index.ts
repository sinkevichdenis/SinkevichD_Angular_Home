import { of, Observable, fromEvent, BehaviorSubject, Subject } from 'rxjs'; 
import { tap, switchMap, takeUntil, skipUntil, filter } from 'rxjs/operators';

interface CustomEvent extends MouseEvent{
  _x: number,
  _y: number
}

const canvas = <HTMLCanvasElement> document.getElementById('tablet');
const ctx = canvas.getContext('2d');

let $mouseDown: Observable<Event> = fromEvent(canvas, 'mousedown');
let $mouseMove: Observable<Event> = fromEvent(canvas, 'mousemove');
let $mouseUp: Observable<Event> = fromEvent(document, 'mouseup');
let $contextMenu: Observable<Event> = fromEvent(canvas, 'contextmenu');
let $color: Observable<string> = new BehaviorSubject('rgb(100, 0, 0)');

$color.subscribe()

$mouseDown.pipe(
  filter(ev => (ev as CustomEvent).which === 1 ),
  tap(() => console.log('down')),
  switchMap(
    x => {
      return $mouseMove.pipe(
        takeUntil(
          $mouseUp.pipe(
           tap(() => console.log('up')),
          )
        ),
      )
    }
  )
).subscribe( ev => draw(ev as CustomEvent));

$contextMenu.subscribe( ev => ev.preventDefault());

$mouseDown.pipe(
  filter(ev => (ev as CustomEvent).which === 3 ),
).subscribe(getColor);

function getXY (ev: CustomEvent): void {
  ev._x = (ev.offsetX > 0) ? ev.offsetX : 0;
  ev._y = (ev.offsetY > 0) ? ev.offsetY : 0;
  console.log('coords', `x=${ev._x}`, `y=${ev._y}`);
}

function draw (ev: CustomEvent): void {
  getXY(ev);
  $color.subscribe(color => ctx.fillStyle = color);
  ctx.beginPath();
  ctx.arc(ev._x, ev._y, 10, 0, 2 * Math.PI);
  ctx.fill();
} 

function getColor(): void {
  let color = `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`;
  $color.next(color);
  console.log(`new color is ${color}`);
}

function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max); 
}
