
import React from 'react';
import { View, StatusBar, Platform, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import RootNavigator from './src/navigators/appNavigator';
import configureStore from './src/store';

export default class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
        isLoading: true,
        storeConfig: null
    };
  }

  componentDidMount(){
    this.setState({
      storeConfig: configureStore(),
      isLoading: false,
    })
  }


  render() {
    if (this.state.isLoading)
      return Platform.OS === 'ios' ? (
          <View
              style={{
                  display: 'flex',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
              }}
          >
              <ActivityIndicator size="large" color="rgb(0,151,235)" />
          </View>
      ) : null;

    return (
      <Provider store={this.state.storeConfig.store}>
          <React.Fragment>
            <View style={{ height: Platform.OS == 'ios' ? 20 : 0 }}>
              <StatusBar
                  backgroundColor={'#c8c8c8'}
                  barStyle={
                      Platform.OS == 'ios'
                          ? 'default'
                          : 'light-content'
                  }
              />
            </View>
            <RootNavigator />
          </React.Fragment>
      </Provider>
      
    );
  }
}

