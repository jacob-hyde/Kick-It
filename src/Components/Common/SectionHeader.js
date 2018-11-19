import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

const SectionHeader = ({title, subtitle, underline, containerStyle}) => {

  const renderSubTitle = () => {
    if(subtitle) return <Text style={styles.subtitleStyle} fontFamily="Roboto-Regular">{subtitle}</Text>;
  };

  return (
    <View style={[styles.containerStyle, containerStyle || {}]}>
      <Text fontFamily="Roboto-Regular" style={[styles.titleStyle, (underline ? styles.underlineStyle : {})]}>{title}</Text>
      {renderSubTitle()}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
    flexBasis: '100%'
  },
  titleStyle: {
    fontSize: 18,
    flex: 1
  },
  underlineStyle: {
    textDecorationLine: 'underline'
  },
  subtitleStyle: {
    flex: 1,
    fontSize: 14,
    textAlign: 'right'
  }
});

export {SectionHeader};
