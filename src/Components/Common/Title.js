import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title = (props) => {
  const styles = StyleSheet.create({
    titleStyle: {
      fontFamily: 'Roboto-Regular',
      fontSize: props.fontSize || 16,
      textAlign: props.align || 'left'
    }
  });
  return (
    <Text style={styles.titleStyle}>
      {props.children}
    </Text>
  );
};


export {Title};
