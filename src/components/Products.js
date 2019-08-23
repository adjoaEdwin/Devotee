import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import {fonts} from 'styles';

class Products extends Component {
  state = {};
  render() {
    const {
      imageStyle,
      itemStyle,
      itemTextStyle,
      orderNumStyle,
      summaryContainer,
      buttonContainer,
      leftContainer,
      leftItems,
      rightItems,
    } = styles;

    return (
      <View>
        <Card containerStyle={{borderRadius: 100 / 3, elevation: 2}}>
          <View style={summaryContainer}>
            <View style={leftContainer}>
              <Image
                source={require('assets/images/groundnuts.jpg')}
                style={imageStyle}
                accessibilityLabel="Groundnuts"
              />
            </View>

            <View>
              <View style={leftContainer}>
                <Text
                  style={[
                    rightItems,
                    {...fonts.bold, fontSize: fonts.tertiary.fontSize},
                  ]}>
                  Exotic Groundnuts
                </Text>
                <Text
                  style={[
                    rightItems,
                    {...fonts.bold, fontSize: fonts.tertiary.fontSize},
                  ]}>
                  Lorem ipsum Donor item
                </Text>
                <Text
                  style={[
                    rightItems,
                    {...fonts.bold, fontSize: fonts.tertiary.fontSize},
                  ]}>
                  <Text style={{...fonts.tertiary}}>GHC</Text> 9,000.00
                </Text>
              </View>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 100 / 2,
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
  itemStyle: {
    alignItems: 'center',
    marginTop: 30,
  },
  itemTextStyle: {
    ...fonts.bold,
  },
  orderNumStyle: {
    ...fonts.tertiary,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  leftContainer: {
    flexDirection: 'column',
    alignContent: 'space-between',
  },
  leftItems: {
    marginBottom: 20,
    textAlign: 'right',
  },
  rightItems: {
    marginBottom: 20,
  },
});

export default Products;
