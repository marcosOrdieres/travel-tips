import React from 'react';
import { BaseScene } from 'components';
import template from './destinationTemplate';
import { connect } from 'react-redux';
import { View, BackHandler, Linking } from 'react-native';
import services from '../../services';
import Palette from '../../common/palette';
import { AdMobInterstitial } from 'react-native-admob';

class DestinationController extends BaseScene {
  constructor (args) {
    super(args);
    this.services = services;
    this.state = {
      latitude: '',
      longitude: ''
    };
    this.chargeAd();
  }

  componentDidMount () {
    this.setState({externalData: true});
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.chargeAd();
      this.navigateTo('Destination'); // works best when the goBack is async
      return true;
    });
  }

  goToTheTip (tipType) {
    this.user.setTipType(tipType);
    this.navigateTo('Tip');
  }

  chargeAd () {
    console.warn('cargando pastaaaa');
    // Display an interstitial
    // travel tip Intersticial ca-app-pub-9901220615892956/3764097726
    // travel tip banner ca-app-pub-9901220615892956/3077702011
    // test Intersticial ca-app-pub-3940256099942544/1033173712
    // test banner ca-app-pub-3940256099942544/6300978111
    AdMobInterstitial.setAdUnitID('ca-app-pub-9901220615892956/3764097726');
    AdMobInterstitial.setTestDevices(['6D1D35847F87DD467EE0D0AD2FE07E63']); // my phone Device
    AdMobInterstitial.requestAd();
  }

  render () {
    return template(this);
  }
}

export default connect()(DestinationController);
