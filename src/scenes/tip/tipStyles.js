import { StyleSheet, Dimensions } from 'react-native';
import Palette from '../../common/palette';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  tipContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  sectionContainer: {
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderBottomColor: 'black',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    height: 80,
    alignItems: 'center'
  },
  iconChevronView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.15
  },
  sectionTitleView: {
    flex: 0.85
  },
  sectionTitle: {
    justifyContent: 'center',
    textAlign: 'left',
    color: Palette.totalBlack,
    fontFamily: 'Calibri',
    fontSize: 20
  }
});
