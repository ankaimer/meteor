Meteor.publish('cubsPub', function () {
  return CubsCollection.find({});
});
