import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';

const source = require('../resources/movies.json');

class List extends React.Component {
  constructor(props) {
    super(props)

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({item}) {
    onPress = (item) => {
      this.props.navigation.navigate('Detail', {
        title: item.name,
        body: item
      })
    }

    return (
      <TouchableHighlight underlayColor="#d2bfef" onPress={ () => onPress(item) }>
        <Text style={ styles.text }>{item.name}</Text>
      </TouchableHighlight>
    );
  }

  keyExtractor(item, index) {
    return `${index}`;
  }

  renderSeparator() {
    const style = { height: 1, backgroundColor: 'darkgrey' };
    return <View style={style} />;
  }

  render() {
    return (
      <FlatList data={ source } renderItem={ this.renderItem } keyExtractor={ this.keyExtractor } ItemSeparatorComponent={ this.renderSeparator }/>
    );
  }
}

List.navigationOptions = {
  title: 'Available Films'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    backgroundColor: '#eee',
  },
  text: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default List;
