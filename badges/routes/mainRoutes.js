// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});


// track Badges
Router.route('/trackBadges', {
  name: 'trackBadges',

  subscriptions: function() {
    // returning a subscription handle or an array of subscription handles
    // adds them to the wait list.
    return Meteor.subscribe('cubsPub');
  },

  action: function () {
    this.render('trackBadges');
    SEO.set({ title: 'Cubs - ' + Meteor.App.NAME });
  }
});

// setup Badges
Router.route('/setupBadges', {
  name: 'setupBadges',

  subscriptions: function() {
    // returning a subscription handle or an array of subscription handles
    // adds them to the wait list.
    return Meteor.subscribe('cubsPub');
  },

  action: function () {
    this.render('setupBadges');
    SEO.set({ title: 'Cubs - ' + Meteor.App.NAME });
  }
});

// setup Cubs
Router.route('/setupCubs', {
  name: 'setupCubs',

  subscriptions: function() {
    // returning a subscription handle or an array of subscription handles
    // adds them to the wait list.
    return Meteor.subscribe('cubsPub');
  },

  action: function () {
    this.render('setupCubs');
    SEO.set({ title: 'Cubs - ' + Meteor.App.NAME });
  }
});
