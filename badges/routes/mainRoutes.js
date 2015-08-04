// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});

// Cubs Route
Router.route('/cubs', {
  name: 'cubsList',

  subscriptions: function() {
    // returning a subscription handle or an array of subscription handles
    // adds them to the wait list.
    return Meteor.subscribe('cubsPub');
  },

  action: function () {
    this.render('cubsList');
    SEO.set({ title: 'Cubs - ' + Meteor.App.NAME });
  }
});
