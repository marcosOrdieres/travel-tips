import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, ImageBackground, FlatList, Platform, Linking } from 'react-native';
import destinationStyles from './destinationStyles';
import MapView from 'react-native-maps';
import { ListItem, TipView } from 'components';
import Palette from '../../common/palette';
import env from '../../config/env';

const {width, height} = Dimensions.get('window');

export default (controller) => (
  <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#f2f2f2' }}>
    <ImageBackground source={{uri: 'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/travelTip.png?alt=media&token=047f2f4f-533a-4b74-99f6-8fd966af2614'}} style={{flex: 0.2}} />
    <View style={{flex: 0.8, flexDirection: 'row'}}>
      <View style={{flex: 0.33333333333, flexDirection: 'column'}}>
        <TipView
          tipImageSource={'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/backpack.png?alt=media&token=1526053e-d18e-4ff7-841a-eaed08a31fbf'}
          tipTitle='Packing'
          onPressTip={() => { controller.goToTheTip('Packing'); }} />
        <TipView
          tipImageSource={'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/transportation.png?alt=media&token=8656f847-bd67-4faf-9499-ae18c20866be'}
          tipTitle='Transports'
          colorTipText
          onPressTip={() => { controller.goToTheTip('Transport'); }} />
        <TipView
          tipImageSource={'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/money.png?alt=media&token=16b9604b-3a82-475b-b609-98b9be01fec1'}
          tipTitle='Money'
          onPressTip={() => { controller.goToTheTip('Money'); }} />
        <TipView
          tipImageSource={'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/foodDrink.png?alt=media&token=c066cb24-ad20-4f89-808a-408ffdc5094d'}
          tipTitle='Food and drink'
          colorTipText
          onPressTip={() => { controller.goToTheTip('Food and drink'); }} />
      </View>

      <View style={{flex: 0.33333333333, flexDirection: 'column'}}>
        <TipView
          tipImageSource={'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/beforeTravel.png?alt=media&token=cd7e9522-2ec4-4a55-acdf-a0b8d7b1fadf'}
          tipTitle='Before travel'
          onPressTip={() => { controller.goToTheTip('Before travel'); }}
         />
        <TipView
          tipImageSource={'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/firstAids.png?alt=media&token=5c8eab08-d8d6-4c6e-8839-63a2a040aa9c'}
          tipTitle='First aids'
          colorTipText
          onPressTip={() => { controller.goToTheTip('First aids'); }} />
        <TipView
          tipImageSource={'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/environment.png?alt=media&token=4f21758e-9441-48fa-9c88-f101dfa55482'}
          tipTitle='Environment'
          onPressTip={() => { controller.goToTheTip('Environment'); }} />
        <Text
          onPress={() => Linking.openURL('https://backpackerneeds2.blogspot.com/2019/03/travel-tip-privacy-policy.html')}
          style={{paddingTop: 10, textAlign: 'center', color: 'blue', textDecorationLine: 'underline'}}>Privacy Policy</Text>
        <TipView
          tipImageSource={'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/hotel.png?alt=media&token=b92a9116-6388-43ee-9d65-3dd589d2e372'}
          tipTitle='Hotel'
          colorTipText
          onPressTip={() => { controller.goToTheTip('Hotel'); }} />
      </View>

      <View style={{flex: 0.33333333333, flexDirection: 'column'}}>
        <TipView
          tipImageSource={'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/behaviour.png?alt=media&token=e7cf2a01-27be-48b1-8a1f-cf71264beabb'}
          tipTitle='Behaviour'
          onPressTip={() => { controller.goToTheTip('Behaviour'); }}
         />
        <TipView
          tipImageSource={'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/destination.png?alt=media&token=e0452f65-71bb-42d9-b96c-e1813f70c5fa'}
          tipTitle='Destination'
          colorTipText
          onPressTip={() => { controller.goToTheTip('Destination'); }} />
        <TipView
          tipImageSource={'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/female.png?alt=media&token=2d6133f5-654d-49c0-85a0-9e0c9afa42c9'}
          tipTitle='For Females'
          onPressTip={() => { controller.goToTheTip('For Females'); }} />
        <TipView
          tipImageSource={'https://firebasestorage.googleapis.com/v0/b/traveltip-2ed4e.appspot.com/o/applications.png?alt=media&token=e046827b-644c-40ca-92df-56dbfaddc751'}
          tipTitle='For my phone'
          onPressTip={() => { controller.goToTheTip('For my phone'); }} />
      </View>

    </View>
  </View>
);
