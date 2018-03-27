import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import createRootNavigator from 'routes';

import 'config/ReactotronConfig';
import 'config/DevtoolsConfig';

export default class App extends Component {
  state = {
    userLogged: false,
    userChecked: false,
  };
  async componentWillMount() {
    const username = await AsyncStorage.getItem('@Githuber:username');

    this.appLoader(username);
  }

  appLoader = (username) => {
    this.setState({
      userChecked: true,
      userLogged: !!username,
    });
  };

  render() {
    const { userChecked, userLogged } = this.state;

    if (!userChecked) return null;

    const Routes = createRootNavigator(userLogged);
    return <Routes />;
  }
}
