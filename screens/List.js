import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, ActivityIndicator } from 'react-native';

class List extends React.Component {
  constructor(props) {
    super(props)

    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.props.onLoad();
  }

  renderItem({item}) {
    onPress = (item) => {
      this.props.navigation.navigate('Detail', {
        title: item.name,
        body: item,
        url: item.imdbUrl
      })
    }

    if (item.tmdbRating >= '60%') {
      colour = '#265819'
    } else if (item.tmdbRating >= '40%' && data.tmdbRating <= '59%') {
      colour = '#71500f'
    } else {
      colour = '#7e2310'
    }

    return (
      <TouchableHighlight underlayColor="#d2bfef" onPress={ () => onPress(item) }>
        <View>
          <Text style={ styles.text }>{item.name}</Text>
          <Text style={ [ styles.rating, {color: colour} ] }>Rating: {item.tmdbRating}%</Text>
        </View>
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
    const { films } = this.props;
    return ( films.length > 0 ?
      <FlatList data={ films } renderItem={ this.renderItem } keyExtractor={ this.keyExtractor } ItemSeparatorComponent={ this.renderSeparator }/> :
      <View style={ styles.loading }>
        <ActivityIndicator size="large" color="#ea66d9" />
      </View>
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
    marginLeft: 8
  },
  loading: {
    marginTop: 20
  },
  rating: {
    marginLeft: 8,
    paddingBottom: 10,
    fontSize: 16
  }
});

export default List;
