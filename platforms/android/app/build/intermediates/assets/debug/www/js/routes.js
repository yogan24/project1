var routes = [
  
  // Main page
  {
    path: '/mainpage/',
    url: './main/mainpage.html',
    name: 'main',
  },
  // About page
  {
    path: '/about/',
    url: './pages/about.html',
    name: 'about',
  },

  {
    path: '/userpage/',
    url: './pages/userpage.html',
    name: 'userpage',
  },

  {
    path: '/userpagetest/',
    url: './pages/userpagetest.html',
    name: 'userpagetest',
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