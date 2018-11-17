import React from 'react';
import { View } from 'react-native';

const FormGroup = (props) => {
  return (
    <View style={[styles.containerStyle, props.containerStyle || {}]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    marginTop: 10,
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  }
};

export { FormGroup };
