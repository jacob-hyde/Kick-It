import React from 'react';
import {StyleSheet, Text, Animated} from 'react-native';
import * as Animatable from 'react-native-animatable';

class DropDownMenu extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
      view: null,
      opacity: new Animated.Value(0),
      height: new Animated.Value(0)
    };
  }

  toggle(){
    if(this.state.isVisible){
      Animated.stagger(200, [
        Animated.timing(this.state.height, {
          toValue: 0,
          duration: 400
        }),
        Animated.timing(this.state.opacity, {
          toValue: 0,
          duration: 100
        })
      ]).start(() => {
        this.setState({...this.state, isVisible: false, view: null});
      });
    }else{
      this.setState({...this.state, isVisible: true, view: this.props.children});
      Animated.stagger(100, [
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 100
        }),
        Animated.timing(this.state.height, {
          toValue: 'auto',
          duration: 300
        }),
      ]).start();
    }
  }

  insertView() {
    this.setState({
      view: this.props.children
    });
  }

  removeView() {
    this.setState({
      view: null
    });
  }

  render(){
    return (
            <Animated.View ref={(ref) => this.viewRef = ref} style={[styles.containerStyle, {opacity: this.state.opacity, height: this.state.height}]}>
              {this.state.view}
            </Animated.View>
          );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    position: 'absolute',
    top: '100%',
    left: '50%',
    width: '50%',
    height: 200,
    zIndex: 10,
    backgroundColor: '#fff'
  }
});

export default DropDownMenu;
