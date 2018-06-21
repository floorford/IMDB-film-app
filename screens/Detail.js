import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Detail extends React.Component {
  render() {
    const data = this.props.navigation.getParam('body')
    const showing = data.showtimes[0]

    console.log(showing.startsAtDate)
    const source = {
      uri: `https://image.tmdb.org/t/p/original/${data.tmdbImageId}.jpg`
    };

    const style = {
      marginTop: 10,
      height: 500,
      width: 300
    };

    return (
      <View style={styles.container}>
        <Image source={ source } style={ style }/>
        <Text>Released in: { data.year }</Text>
        <Text>Rating: { data.tmdbRating }%</Text>
        <Text>Showtimes: { showing.startsAtDate } at { showing.startsAtTime } on { showing.channel }</Text>
        <Text>{ data.synopsis }</Text>
      </View>
    );
  }
}

Detail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('title'),
  body: navigation.getParam('body')
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Detail
