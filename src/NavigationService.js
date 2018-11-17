import { NavigationActions } from 'react-navigation';

let _navigator = null;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params){
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function back(){
  _navigator.dispatch(
    NavigationActions.back()
  );
}

export default {
  navigate,
  setTopLevelNavigator,
  back,
};
