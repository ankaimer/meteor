Meteor.publish('cubs', function () {
  return cubs.find();
});
