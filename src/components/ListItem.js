import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common';


class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    const item = this.props.library.item;
    console.log(item.title);
    return (
      <CardSection>
        <Text style={titleStyle}>{item.title}</Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem;