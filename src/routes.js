import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import HeaderRight from 'components/HeaderRight';
import { colors, metrics } from 'styles';

import Welcome from 'pages/welcome';
import Repositories from 'pages/repositories';
import Organizations from 'pages/organizations';

const createNavigator = (isLogged = false) => StackNavigator({
  Welcome: { screen: Welcome },
  User: {
    screen: TabNavigator({
      Repositories: { screen: Repositories },
      Organizations: { screen: Organizations },
    }, {
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        activeTintColor: colors.white,
        inactiveTintColor: colors.whiteTransparent,
        style: {
          backgroundColor: colors.secundary,
        },
      },
    }),
  },
}, {
  initialRouteName: isLogged ? 'User' : 'Welcome',
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      paddingHorizontal: metrics.basePadding,
    },
    headerRight: <HeaderRight navigation={navigation} />,
  }),
});

export default createNavigator;
