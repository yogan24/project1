var routes = [
  
  // Main page
  {
    path: '/mainpage/',
    url: './pages/mainpage.html',
    name: 'mainpage',
  },

  {
    path: '/startpage/',
    url: './pages/startpage.html',
    name: 'startpage',

    on:{
      pageAfterIn: function(e, page)
      {
        alert("working? --> Page after in");
      }
    }

  },