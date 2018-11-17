import React from 'react';
import {View, StyleSheet} from 'react-native';
import material from './../../assets/theme/variables/material';

const Container = (props) => {
  return (
    <View style={[styles.containerStyle, props.containerStyle || {}]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    padding: 5,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: material.BACKGROUND_COLOR
  }
});

export {Container};
