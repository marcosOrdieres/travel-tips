import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Text, ImageBackground } from 'react-native';
import Palette from '../common/palette';
import rootStore from '../stores/root';
import i18n from '../translations';
import User from '../models/user';

const {width, height} = Dimensions.get('window');

const localStyles = StyleSheet.create({
  tipViewStyle: {flex: 0.25, justifyContent: 'center', alignItems: 'center'},
  imageBack: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  textBack: {fontFamily: 'Calibri', fontSize: 16, fontWeight: 'bold', paddingBottom: '5%'},
  touchableStyle: {width: '80%', height: '80%', borderRadius: 10}
});

export default class TipViewComponent extends Component {
  constructor (args) {
    super(args);
  }

  render () {
    return (
      <View style={localStyles.tipViewStyle}>
        <TouchableOpacity
          onPress={this.props.onPressTip}
          style={localStyles.touchableStyle}>
          <ImageBackground imageStyle={{ borderRadius: 10 }} source={this.props.tipImageSource} style={localStyles.imageBack}>
            <Text style={[{color: this.props.colorTipText ? 'black' : 'white'}, localStyles.textBack]}>{this.props.tipTitle}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}
