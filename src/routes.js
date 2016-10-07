var  React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route =Router.Route;


var routes = (

  <Route  Name="app" path="/"  handler={require('./components/app')}>

      <DefaultRoute handler={require('./components/homepage')} />
      <Route name ="header" handler={require('./components/Header')}/>
      <Route name ="Home" handler={require('./components/homepage')}/>
       <Route name ="Price" handler={require('./components/Price')}/>
           <Route path="EventsData/:EventId" name ="EventsData" handler ={require('./components/EventsData')}/>
       <Route name ="PortFolio" handler={require('./components/PortFolio')}/>
      <Route name ="AboutUs" handler={require('./components/bout')}/>
      <Route name ="Team" handler={require('./components/team')}/>
      <Route name ="Contact" handler={require('./components/out')}/>
      <Route name ="Events" handler={require('./components/events')}/>
  </Route>


);
module.exports =routes;

