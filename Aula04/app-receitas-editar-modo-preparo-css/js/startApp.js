var app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: true,
    },
    // Add default routes
    routes: [
      {
        path: '/teste/',
        url: 'teste.html',
      },
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');