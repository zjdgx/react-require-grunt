require(['react', './components/dest/header'], function (React, Header) {
   React.render(
      <Header name='world'/>,
      document.getElementById('main')
   );
});
