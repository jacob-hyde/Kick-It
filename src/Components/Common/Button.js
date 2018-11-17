import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import material from './../../assets/theme/variables/material';

const Button = ({ buttonContainer, onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, buttonContainer || {}]}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    paddingTop: 15,
    paddingBottom: 15,
    fontFamily: 'Roboto-Regular'
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: material.BUTTON_BACKGROUND_COLOR,
  }
};

export { Button };
