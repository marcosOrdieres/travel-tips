import React from 'react';
import { BaseScene } from 'components';
import template from './tipTemplate';
import { connect } from 'react-redux';
import { View, BackHandler, Linking } from 'react-native';
import services from '../../services';
import Palette from '../../common/palette';
import { AdMobInterstitial } from 'react-native-admob';

import {
  PackingTips,
  BehaviourTips,
  BeforeTravelTips,
  TransportTips,
  FirstAidsTips,
  DestinationTips,
  MoneyTips,
  EnvironmentTips,
  FemalesTips,
  FoodAndDrinkTips,
  HotelTips,
  ForMyPhoneTips
} from 'helper';

class TipController extends BaseScene {
  constructor (args) {
    super(args);
    this.services = services;
    this.state = {
      selected: false,
      externalData: null,
      index: 0,
      collapsed: {},
      imageBackground: null
    };
  }

  chargeDataTip () {
    switch (this.user.getTipType()) {
      case 'Packing':
        return PackingTips;
        break;
      case 'Behaviour':
        return BehaviourTips;
        break;
      case 'Before travel':
        return BeforeTravelTips;
        break;
      case 'Transport':
        return TransportTips;
        break;
      case 'First aids':
        return FirstAidsTips;
        break;
      case 'Destination':
        return DestinationTips;
        break;
      case 'Money':
        return MoneyTips;
        break;
      case 'Environment':
        return EnvironmentTips;
        break;
      case 'For Females':
        return FemalesTips;
        break;
      case 'Food and drink':
        return FoodAndDrinkTips;
        break;
      case 'Hotel':
        return HotelTips;
        break;
      case 'For my phone':
        return ForMyPhoneTips;
        break;
      default:

    }
  }

  chargeImageBackgroundDataTip () {
    switch (this.user.getTipType()) {
      case 'Packing':
        return 'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/packBackground.png?alt=media&token=51bf448f-a8aa-4e4b-8f91-dd1df5bdda15';
        break;
      case 'Behaviour':
        return 'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/behaviourBack.png?alt=media&token=57eebd0b-d01e-43f4-8d2e-39fe4e51e7d7';
        break;
      case 'Before travel':
        return 'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/beforeTravelBack.png?alt=media&token=387e9b84-184e-4180-8ace-cb469f4bd3ff';
        break;

      case 'Transport':
        return 'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/transportBack.png?alt=media&token=6c0f8139-cd3b-4716-8fc0-dc4dffafeef9';
        break;
      case 'First aids':
        return 'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/firstAidsBack.png?alt=media&token=87165dc1-9cfe-4597-9c2a-4a271bab28fc';
        break;
      case 'Destination':
        return 'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/destinationBack.png?alt=media&token=cb5f076f-8a5b-4693-b941-d1738a2d2910';
        break;

      case 'Money':
        return 'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/moneyBack.png?alt=media&token=40889e7e-1bfb-4b9b-a360-52378fe35573';
        break;
      case 'Environment':
        return 'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/environmentBack.png?alt=media&token=319da642-4f63-4776-8f00-17acf2c34278';
        break;
      case 'For Females':
        return 'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/femaleBack.png?alt=media&token=b9144ec5-1481-455e-82ca-f068958a3a03';
        break;

      case 'Food and drink':
        return 'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/foodBack.png?alt=media&token=cf8e1487-61f9-48af-93e6-ef4ce0b9a884';
        break;
      case 'Hotel':
        return 'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/hotelBack.png?alt=media&token=abcc6654-0bae-4461-a15a-0525cf1c4374';
        break;
      case 'For my phone':
        return 'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/phoneBack.png?alt=media&token=c74d0474-b3d4-4333-b0a4-a88edc06d790';
        break;
      default:

    }
  }

  componentDidMount () {
    this.user.setCounterForAd(1);
    this.showAdEvenClick();
    this.setState({externalData: true});
  }

  showAdEvenClick () {
    if (this.user.getCounterForAd() % 2) {
      AdMobInterstitial.showAd();
    } else {
      console.warn('do not show the ad');
    }
  }

  render () {
    return template(this);
  }
}

export default connect()(TipController);
