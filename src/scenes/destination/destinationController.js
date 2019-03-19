import React from 'react';
import { BaseScene } from 'components';
import template from './destinationTemplate';
import { connect } from 'react-redux';
import { View, BackHandler, Linking } from 'react-native';
import services from '../../services';
import Palette from '../../common/palette';

class DestinationController extends BaseScene {
  constructor (args) {
    super(args);
    this.services = services;
    this.state = {
      latitude: '',
      longitude: ''
    };
  }

  componentDidMount () {
    this.setState({externalData: true});
  }

  goToTheTip (tipType) {
    this.user.setTipType(tipType);
    this.navigateTo('Tip');
  }

  render () {
    return template(this);
  }
}

export default connect()(DestinationController);
