import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {

   // console.log(library.description);
    return (
    // <View>
    //   <Text>{item.title}</Text>
    // </View>
    // );

   <ListItem library={library} />
    );
  }

  render() {
   // console.log(this.props);
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}

const mapStateToProps = state => {
  return  { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);