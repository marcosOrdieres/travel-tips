import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, ImageBackground, SectionList, Platform, Linking } from 'react-native';
import tipStyles from './tipStyles';
import MapView from 'react-native-maps';
import { ListItem, TipView } from 'components';
import Palette from '../../common/palette';
import env from '../../config/env';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AdMobBanner} from 'react-native-admob';

const {width, height} = Dimensions.get('window');

export default (controller) => (
  <View style={{flex: 1}}>
    <ImageBackground source={{uri: controller.chargeImageBackgroundDataTip()}} style={{flex: 0.15, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontFamily: 'Calibri', fontSize: 30, fontWeight: 'bold', textAlign: 'center',
        color: controller.user.getTipType() === 'Before travel' ||
          controller.user.getTipType() === 'First aids' ||
          controller.user.getTipType() === 'Destination' ||
          controller.user.getTipType() === 'Hotel'
           ? 'black' : 'white'}}>{controller.user.getTipType()}</Text>
    </ImageBackground>
    <View style={{flex: 0.85, textAlign: 'center', backgroundColor: '#e6e6e6'}}>
      <SectionList
        renderItem={({item, index, section}) => {
          return (
            controller.state.collapsed[section.title] ?
              <View style={{paddingTop: '5%', paddingBottom: '5%', paddingLeft: '10%', paddingRight: '10%'}}>
                <Text style={{fontFamily: 'Calibri', fontSize: 14}} key={index}>{item}</Text>
              </View>
            :
              null
          );
        }}
        renderSectionHeader={(prop) => {
          return (
            <TouchableOpacity
              onPress={() => {
                const state = controller.state;
                state.collapsed[prop.section.title] = !state.collapsed[prop.section.title];
                controller.setState(state);
              }}
              style={tipStyles.sectionContainer}>
              <View style={[tipStyles.iconChevronView, {transform: [{ rotate: !controller.state.collapsed[prop.section.title] ? '0deg' : '90deg'}]}]}>
                <Icon name='chevron-right' size={25} color={'#1a75ff'} />
              </View>
              <View style={tipStyles.sectionTitleView}>
                <Text style={tipStyles.sectionTitle}>{prop.section.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        sections={controller.chargeDataTip()}
        stickySectionHeadersEnabled />
    </View>
    {controller.user.getTipType() === 'Behaviour' ||
      controller.user.getTipType() === 'For Females' ||
      controller.user.getTipType() === 'Money' ||
      controller.user.getTipType() === 'Destination' ||
      controller.user.getTipType() === 'For my phone' ?
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <AdMobBanner
            adSize='banner'
            adUnitID='ca-app-pub-9901220615892956/3077702011'
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={error => console.warn('ERROR IN THE BANNDER AD:', error)}
          />
        </View>
    :
      null
    }
  </View>
);
