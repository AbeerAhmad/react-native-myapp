import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right, View } from 'native-base';

import { connect } from 'react-redux'
class Itemlist extends Component {
  state = {
    items: [{
      name: 'ali'
    }, {
      name: 'abeer'
    }, {
      name: 'abeel'
    }, {
      name: 'abeer'
    }, {
      name: 'abeer'
    }, {
      name: 'abeer'
    }, {
      name: 'abeer'
    }, {
      name: 'abeer'
    }, {
      name: 'abeer'
    }, {
      name: 'abeer'
    }]
  }
  render() {
    const items = this.state.items
    console.log(items)

    const cards = items.map((item, i) => {
      return (
        <Card style={{
          width: '48%',}} key={i}>
          <CardItem style={{ padding: 0, }}>

            <Image source={require('../images/aaa.jpg')} style={{ width: '100%', height: 150 }} />
          </CardItem>
          <CardItem style={{padding:0}}>
            <Text>{item.name}</Text>
          </CardItem>
          <CardItem style={{ padding: 0 }}>
            <Left>
              <Button transparent textStyle={{ color: '#87838B' }} style={{ padding: 0, }}>
                <Icon name="heart" type='EvilIcons'/>
              </Button>
              <Button transparent textStyle={{ color: '#87838B' }} style={{ padding: 0 }}>
                <Icon name="cart" type='EvilIcons' fontSize='50' />
              </Button>
            </Left>
          </CardItem>
        </Card>

      )
    })
    return (
      <Container>
        <Content >
          <View style={{ display: 'flex', flexDirection: 'row', flex: 1, flexWrap: 'wrap', justifyContent: 'flex-start',alignItems:'center' }}>
            {cards}
          </View>
        </Content>
      </Container>

    );
  }
}
const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
}

export default connect(mapStateToProps)(Itemlist)