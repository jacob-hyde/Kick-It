import React from 'react';
import { connect } from 'react-redux';
import {createStackNavigator, createSwitchNavigator, createDrawerNavigator} from 'react-navigation';
import NavigationService from './NavigationService';
import DrawerMenu from './Components/DrawerMenu';
import WelcomeView from './Screens/Welcome';
import PinCreateView from './Screens/Welcome/PinCreate';
import AuthView from './Screens/Auth';
import Home from './Screens/Home';

const SetupStack = createStackNavigator({
  WelcomeView: {
    screen: WelcomeView,
    navigationOptions: () => ({
      header: null
    })
  },
  PinCreateView: {
    screen: PinCreateView,
    navigationOptions: () => ({
      header: null
    })
  }
});

const AuthStack = createStackNavigator({
  AuthView: {
    screen: AuthView,
    navigationOptions: () => ({
      header: null
    })
  }
});

const Drawer = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      if(navigation.state.index >= 1) return {drawerLockMode: 'locked-closed'};
      else return {drawerLockMode: 'unlocked'};
    }
  }
},{
  inititalRouteName: 'Home',
  drawerPosition: 'left',
  contentComponent: DrawerMenu,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: Drawer,
    navigationOptions: () => ({
      header: null,
    })
  }
});

const Navigation = createSwitchNavigator({
  Setup: SetupStack,
  Auth: AuthStack,
  App: AppNavigator
}, {initialRouteName: 'Setup'});

class Router extends React.Component {
  componentDidMount(){
    NavigationService.navigate(this.props.route.switch);
  }
  render(){
      return (
        <Navigation
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
          />
      );
  }
};

const mapStateToProps = (state) => {
  return {route: state.view};
};




export default connect(mapStateToProps, null)(Router);
