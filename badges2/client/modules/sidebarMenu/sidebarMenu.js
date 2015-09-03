Template['sidebarMenu'].helpers({});

Template['sidebarMenu'].events({
  'click .sidebar.icon': function(){
    console.log("sidebarMenu Clicked");
  }
});

Template.sidebarMenu.onRendered(function (){

  // set up sidebar and menu
  console.log("sidebarMenu onRendered");

  $('.context.example .ui.sidebar')
    .sidebar({
      context: $('.context.example .bottom.segment'),
      transition: 'overlay'
    })
/*    .sidebar('attach events', '.context.example .item');*/
    // attach sidebar toggle events to menu items - exclude the one used for login
    .sidebar('attach events', $('.item').not('#loginMenuItem'));
});

Template.sidebarMenu.onCreated(function (){
  console.log("sidebarMenu onCreated");

});
