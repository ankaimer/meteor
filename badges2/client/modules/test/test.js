Template['test'].helpers({});

Template['test'].events({
  'click .ui.sidebar': function() {
    console.log("testMenu Clicked");

    $('.ui.sidebar')
      .sidebar('setting', 'transition', 'overlay')
      .sidebar('toggle');

  }
});

Template.test.onRendered(function() {

  // set up sidebar and menu
  console.log("testMenu onRendered");

  $('.context.example .ui.sidebar')
    .sidebar({
      context: $('.context.example .bottom.segment')
    })
    .sidebar('attach events', '.context.example .menu .item');
});
