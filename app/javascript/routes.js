import      React        from 'react';
import   AlbumScreen     from './screens/album';
import  DiscoveryScreen  from './screens/discovery';
import  FavoritesScreen  from './screens/favorites';
import    HomeScreen     from './screens/home';
import   SearchScreen    from './screens/search';
import { Switch, Route } from 'react-router-dom'; 

const Routes = () => (
  <Switch>
    <Route exact path='/'           component={HomeScreen}/>
    <Route exact path='/album/:id'  component={AlbumScreen}/>
    <Route exact path='/discovery'  component={DiscoveryScreen}/>
    <Route exact path='/favorites'  component={FavoritesScreen}/>
    <Route exact path='/search'     component={SearchScreen}/>
  </Switch>
)
export default Routes;