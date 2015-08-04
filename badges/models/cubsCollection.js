CubsCollection = new Mongo.Collection('CubsCollection');

CubsCollection.attachSchema(
    new SimpleSchema({
    name: {
      type: String
    },
    dateOfBirth: {
      type: Date
    },
    createdAt: {
      type: Date,
      denyUpdate: true
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  CubsCollection.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}
