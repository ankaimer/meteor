function loadFixture(fixtures, collection) {
  var i;

  collection.remove({ });
  for (i = 0; i < fixtures.length; i+= 1) {
    //collection.remove({ });
    collection.insert(fixtures[i]);
  }
}

Meteor.startup(function () {
  loadFixture(Fixtures['cubsFixture'], CubsCollection);
});
