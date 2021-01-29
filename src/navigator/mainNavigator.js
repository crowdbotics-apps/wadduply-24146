import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile198430Navigator from '../features/UserProfile198430/navigator';
import Maps198411Navigator from '../features/Maps198411/navigator';
import Settings198389Navigator from '../features/Settings198389/navigator';
import Settings198374Navigator from '../features/Settings198374/navigator';
import NotificationList198373Navigator from '../features/NotificationList198373/navigator';
import Maps198372Navigator from '../features/Maps198372/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile198430: { screen: UserProfile198430Navigator },
Maps198411: { screen: Maps198411Navigator },
Settings198389: { screen: Settings198389Navigator },
Settings198374: { screen: Settings198374Navigator },
NotificationList198373: { screen: NotificationList198373Navigator },
Maps198372: { screen: Maps198372Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
