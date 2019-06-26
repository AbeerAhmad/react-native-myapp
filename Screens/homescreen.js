import React, { Component } from 'react';
import { Button} from 'react-native'

import { connect } from 'react-redux'
import { Container, Text, View } from 'native-base';
class HomeScreen extends Component {
  render() {
    const { friends } = this.props
    return (
      <View>
         <Button
          title="Go to Items" style={{width:'40%',height:50}}
          onPress={() => this.props.navigation.navigate('Itemlist')}
        />
      </View>
      
    );
  }
}
const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
}

export default connect(mapStateToProps)(HomeScreen)