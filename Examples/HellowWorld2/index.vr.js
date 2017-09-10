import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class HellowWorld2 extends React.Component {
  constructor() {
    super();

    this.state = {textColor: 'white'};
    // this.pointerrestricted = this.pointerrestricted.bind(this);
    // this.pointerunrestricted = this.pointerunrestricted.bind(this);
  }

  render() {
    //var view = this;
    return (
      <VrButton
      onClick={() => this.setState({textColor: 'red'})}
        >
        <Pano source={asset('chess-world.jpg')}/>
        <Text
          style={{
            color: this.state.textColor,
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}
          onEnter={() => this.setState({textColor: 'yellow'})}
          onExit={() => this.setState({textColor: 'white'})}>
          hello
        </Text>
          
      </VrButton>
    );
  }
};

AppRegistry.registerComponent('HellowWorld2', () => HellowWorld2);
