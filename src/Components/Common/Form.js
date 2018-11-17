import React from 'react';
import {View, StyleSheet} from 'react-native';

const Form = (props) => {
  return (
    <View style={[styles.containerStyle, props.containerStyle || {}]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  }
});

export {Form};
