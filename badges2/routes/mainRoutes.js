Router.route('/', function () {
  this.render('home');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
}, {name:'home'});

Router.route('trackBadges', {
  name: 'trackBadges',
  template: 'trackBadges'
});

Router.route('setupBadges', {
  name: 'setupBadges',
  template: 'setupBadges'
});

Router.route('setupCubs', {
  name: 'setupCubs',
  template: 'setupCubs'
});
