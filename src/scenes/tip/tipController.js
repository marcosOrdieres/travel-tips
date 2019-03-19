import React from 'react';
import { BaseScene } from 'components';
import template from './tipTemplate';
import { connect } from 'react-redux';
import { View, BackHandler, Linking } from 'react-native';
import services from '../../services';
import Palette from '../../common/palette';
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

// import backgroundTips from '../../assets/images/backgroundTips.png';
import backgroundPack from '../../assets/images/backgroundTitle/packBackground.png';
import backgroundBeforeTravel from '../../assets/images/backgroundTitle/beforeTravelBack.png';
import backgroundBehaviour from '../../assets/images/backgroundTitle/behaviourBack.png';

import backgroundTransport from '../../assets/images/backgroundTitle/transportBack.png';
import backgroundFirstAids from '../../assets/images/backgroundTitle/firstAidsBack.png';
import backgroundDestination from '../../assets/images/backgroundTitle/destinationBack.png';

import backgroundMoney from '../../assets/images/backgroundTitle/moneyBack.png';
import backgroundEnvironment from '../../assets/images/backgroundTitle/environmentBack.png';
import backgroundFemales from '../../assets/images/backgroundTitle/femaleBack.png';

import backgroundFood from '../../assets/images/backgroundTitle/foodBack.png';
import backgroundHotel from '../../assets/images/backgroundTitle/hotelBack.png';
import backgroundPhone from '../../assets/images/backgroundTitle/phoneBack.png';

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
        return backgroundPack;
        break;
      case 'Behaviour':
        return backgroundBehaviour;
        break;
      case 'Before travel':
        return backgroundBeforeTravel;
        break;

      case 'Transport':
        return backgroundTransport;
        break;
      case 'First aids':
        return backgroundFirstAids;
        break;
      case 'Destination':
        return backgroundDestination;
        break;

      case 'Money':
        return backgroundMoney;
        break;
      case 'Environment':
        return backgroundEnvironment;
        break;
      case 'For Females':
        return backgroundFemales;
        break;

      case 'Food and drink':
        return backgroundFood;
        break;
      case 'Hotel':
        return backgroundHotel;
        break;
      case 'For my phone':
        return backgroundPhone;
        break;
      default:

    }
  }

  componentDidMount () {
    this.setState({externalData: true});
  }

  render () {
    return template(this);
  }
}

export default connect()(TipController);
