const { range, Observable, Subject } = require('rxjs');
const { map, filter } = require('rxjs/operators');

 
// range(1, 200).pipe(
//   filter(x => x % 2 === 1),
//   map(x => x + x)
// ).subscribe(x => console.log(x));


const observable = new Subject()
observable.subscribe( x => {
    console.log('a', x)
}, e => {
    console.log('a', 'error', e)
})

let count = 0
for(var i = 0; i<1000; i++){
    observable.subscribe( x => {
        console.log('b', x, count)
        count ++
    }, e => {
        console.log('b', 'error', e)
    })
}


observable.next('x')

