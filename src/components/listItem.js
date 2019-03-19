import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Text, Linking } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Palette from '../common/palette';
import rootStore from '../stores/root';
import i18n from '../translations';
import User from '../models/user';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  viewButtonStyle: {
    paddingTop: 5,
    paddingBottom: 5
  },
  buttonStyle: {
    fontSize: 14,
    fontFamily: 'Hind-Medium',
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 50,
    borderWidth: 2
  },
  buttonTextStyle: {
    textAlign: 'center'
  }
});

export default class ListItemComponent extends Component {
  constructor (args) {
    super(args);
    this.rootStore = rootStore;
    this.user = User.instance;
  }

  render () {
    return (
      <View />
    );
  }
}
