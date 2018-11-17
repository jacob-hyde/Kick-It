import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const DropDownMenuButton = ({ buttonContainer, onPress, children }) => {
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
    color: '#000',
    fontSize: 16,
    paddingTop: 15,
    paddingBottom: 15,
    fontFamily: 'Roboto-Regular'
  },
  buttonStyle: {
    alignSelf: 'stretch',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  }
};

export default DropDownMenuButton;
