cubs = new Mongo.Collection('cubs');

cubs.attachSchema(
  new SimpleSchema({
    name: {
      type: String,
      label: "Cub Name"
    },
    dob: {
      type: Date,
      label: "Date of Birth",
      autoValue: function() {
        if (this.isInsert) {
          return new Date;
        }
      }
    }
    /*
        createdAt: {
          type: Date,
          denyUpdate: true
        }
    */
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  cubs.allow({
    insert: function() {
      return true;
    },
    update: function() {
      return true;
    },
    remove: function() {
      return true;
    }
  });
}

if (Meteor.isClient) {
  Meteor.subscribe("cubs");
}
