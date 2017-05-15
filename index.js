const meInReact =
  React.createElement('div', { className: 'me'},
    React.createElement('h1', {}, "An Awesome Person"),
    React.createElement('p', {}, "Who is learning React"),
    React.createElement('ul', { className: "me_interests"}, [
      React.createElement('li', {}, "JavaScript"),
      React.createElement('li', {}, "React"),
      React.createElement('li', {}, "Movies"),
      React.createElement('li', {}, "Ice cream")
    ])
  );


ReactDOM.render(
  meInReact,
  document.getElementById('main')
);
//
// const list =
//   React.createElement('div', {},
//     React.createElement('h1', {}, 'My favorite ice cream flavors'),
//     React.createElement('ul', {},
//       [
//         React.createElement('li', { className: 'brown' }, 'Chocolate'),
//         React.createElement('li', { className: 'white' }, 'Vanilla'),
//         React.createElement('li', { className: 'yellow' }, 'Banana')
//       ]
//     ));
//
// ReactDOM.render(list, document.getElementById('main'));
//
// <div class="me">
//   <h1>An Awesome Person</h1>
//   <p>Who is learning React</p>
//
//   <ul class="me__interests">
//     <li>JavaScript</li>
//     <li>React</li>
//     <li>Movies</li>
//     <li>Ice cream</li>
//   </ul>
// </div>
