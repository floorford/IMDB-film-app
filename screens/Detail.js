import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View, Image, ScrollView, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WebBrowser } from 'expo';

import moment from 'moment';

class Detail extends React.Component {
  render() {
    const data = this.props.navigation.getParam('body')
    const showing = data.showtimes[0]
    const showTime = moment(`${showing.startsAtDate}T${showing.startsAtTime}`).calendar()

    const source = {
      uri: `https://image.tmdb.org/t/p/original/${data.tmdbImageId}.jpg`
    };

    const style = {
      marginTop: 10,
      height: 400,
      width: 300,
      marginLeft: 40
    };

    if (data.tmdbRating >= '60%') {
      colour = '#265819'
    } else if (data.tmdbRating >= '40%' && data.tmdbRating <= '59%') {
      colour = '#71500f'
    } else {
      colour = '#7e2310'
    }

    return (
      <ScrollView style={ styles.container }>
        <Image source={ source } style={ style }/>
        <View style={ styles.detailCont }>
          <Text style={ styles.relShow }>Released in: { data.year }</Text>
          <Text style={ [ styles.rating, {color: colour} ] }>Rating: { data.tmdbRating }%</Text>
        </View>
        <Text style={ styles.relShow }>Showtimes:</Text>
        <Text style={ styles.time }>{showTime} on {showing.channel}</Text>
        <View style={ styles.line}/>
        <Text style={ styles.syn }>{ data.synopsis }</Text>
      </ScrollView>
    );
  }
}

Detail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('title'),
  body: navigation.getParam('body'),
  headerRight: (
    <TouchableHighlight
      onPress={
        async (url) => WebBrowser.openBrowserAsync(navigation.getParam('url'))
      }
      style={{marginRight: 5}}
    >
      <Ionicons name="ios-film" size={38} color="white" />
    </TouchableHighlight>
   ),
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  relShow: {
    marginLeft: 10,
    fontSize: 18,
  },
  rating: {
    marginRight: 10,
    fontSize: 18,
  },
  time: {
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 10
  },
  syn: {
    marginTop: 10,
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10
  },
  line: {
    height: 1,
    backgroundColor: '#777',
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Detail
