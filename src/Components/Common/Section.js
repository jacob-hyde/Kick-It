import React from 'react';
import {View, StyleSheet} from 'react-native';

const Section = (props) => {
  return (
    <View style={[styles.containerStyle, props.containerStyle || {}, props.column ? {flexDirection: 'column'} : {}]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 10,
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  }
});

export {Section};
