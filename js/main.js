//Timer

//Logic (functional)
function main () {
  return Rx.Observable.timer(0, 1000) // 0---1---2
    .map(function(i) { return "Second elapsed " + i ; });
}

//Effects (imperative)
function DOMEffect ( text$ ) {
  text$.subscribe(function(text) {
    const container = document.querySelector("#timer");
    container.textContent = text;
  });
}
function ConsoleLogEffect( msg$ ) {
  msg$.subscribe(function (text) {
    console.log(text);
  })
}

// start app
const sink = main();
DOMEffect(sink);
ConsoleLogEffect(sink)
