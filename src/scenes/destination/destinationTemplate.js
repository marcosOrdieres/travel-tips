import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, ImageBackground, FlatList, Platform, Linking } from 'react-native';
import destinationStyles from './destinationStyles';
import MapView from 'react-native-maps';
import { ListItem, TipView } from 'components';
import Palette from '../../common/palette';
import env from '../../config/env';
import packs from '../../assets/images/backpack.png';
import behaviour from '../../assets/images/behaviour.png';
import beforeTravel from '../../assets/images/beforeTravel.png';
import transportation from '../../assets/images/transportation.png';
import firstAids from '../../assets/images/firstAids.png';
import destination from '../../assets/images/destination.png';
import money from '../../assets/images/money.png';
import environment from '../../assets/images/environment.png';
import female from '../../assets/images/female.png';
import foodAndDrink from '../../assets/images/foodDrink.png';
import hotel from '../../assets/images/hotel.png';
import myPhone from '../../assets/images/applications.png';
import travelTipImage from '../../assets/images/travelTip.png';

const {width, height} = Dimensions.get('window');

export default (controller) => (
  <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#f2f2f2' }}>
    <ImageBackground source={travelTipImage} style={{flex: 0.2}} />
    <View style={{flex: 0.8, flexDirection: 'row'}}>
      <View style={{flex: 0.33333333333, flexDirection: 'column'}}>
        <TipView
          tipImageSource={packs}
          tipTitle='Packing'
          onPressTip={() => { controller.goToTheTip('Packing'); }} />
        <TipView
          tipImageSource={transportation}
          tipTitle='Transports'
          colorTipText
          onPressTip={() => { controller.goToTheTip('Transport'); }} />
        <TipView
          tipImageSource={money}
          tipTitle='Money'
          onPressTip={() => { controller.goToTheTip('Money'); }} />
        <TipView
          tipImageSource={foodAndDrink}
          tipTitle='Food and drink'
          colorTipText
          onPressTip={() => { controller.goToTheTip('Food and drink'); }} />
      </View>

      <View style={{flex: 0.33333333333, flexDirection: 'column'}}>
        <TipView
          tipImageSource={beforeTravel}
          tipTitle='Before travel'
          onPressTip={() => { controller.goToTheTip('Before travel'); }}
         />
        <TipView
          tipImageSource={firstAids}
          tipTitle='First aids'
          colorTipText
          onPressTip={() => { controller.goToTheTip('First aids'); }} />
        <TipView
          tipImageSource={environment}
          tipTitle='Environment'
          onPressTip={() => { controller.goToTheTip('Environment'); }} />
        <TipView
          tipImageSource={hotel}
          tipTitle='Hotel'
          colorTipText
          onPressTip={() => { controller.goToTheTip('Hotel'); }} />
      </View>

      <View style={{flex: 0.33333333333, flexDirection: 'column'}}>
        <TipView
          tipImageSource={behaviour}
          tipTitle='Behaviour'
          onPressTip={() => { controller.goToTheTip('Behaviour'); }}
         />
        <TipView
          tipImageSource={destination}
          tipTitle='Destination'
          colorTipText
          onPressTip={() => { controller.goToTheTip('Destination'); }} />
        <TipView
          tipImageSource={female}
          tipTitle='For Females'
          onPressTip={() => { controller.goToTheTip('For Females'); }} />
        <TipView
          tipImageSource={myPhone}
          tipTitle='For my phone'
          onPressTip={() => { controller.goToTheTip('For my phone'); }} />
      </View>

    </View>
  </View>
);
