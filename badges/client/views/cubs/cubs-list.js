Template['cubsList'].helpers({

  cubsCollection: function () {

    return CubsCollection.find({});
  }
});

Template['cubsList'].events({
  'submit form': function(){
    var newCub = {
      name: "Test",
      dateOfBirth: "20 May 2000"
    }
    CubsCollection.insert(newCub);
    console.log("Submit");
}
});
