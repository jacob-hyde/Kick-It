import React from 'react';
import { TextInput, View } from 'react-native';
import {Icon} from 'react-native-elements';

class Input extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isSelected: false
    };
  }

  onSelected(){
    if(this.state.isSelected){
      this.setState({...this.state, isSelected: false});
    }else{
      this.setState({...this.state, isSelected: true});
    }
  }

  renderIcon(){
    if(this.props.icon === undefined) return;
    else{
          return (
            <Icon
              name={this.props.icon}
              containerStyle={styles.iconStyle}
              size={20}
              color={this.state.isSelected ? '#6bb9f0' : '#ecf0f1'}
            />);
        }
  }

  render(){
    return(
      <View style={[styles.containerStyle, this.props.containerStyle || {}]}>
        {this.renderIcon()}
        <TextInput
          onBlur={this.onSelected.bind(this)}
          onFocus={this.onSelected.bind(this)}
          autoCapitalize='none'
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          autoCorrect={false}
          style={[styles.inputStyle, styles.inputStyleNoLabel, this.props.inputStyle || {}]}
          value={this.props.input.value}
          onChangeText={this.props.input.onChange}
          placeholderTextColor='#ecf0f1'
          keyboardType={this.props.number ? 'number-pad' : 'defaultff44'}
        />
      </View>
    );
  }
}

const styles = {
  inputStyle: {
    color: '#000',
    backgroundColor: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 16,
    flex: 2,
    fontFamily: 'Roboto-Regular',
  },
  inputStyleNoLabel: {
    flex: 1,
    height: 40,
    textAlign: 'center',
  },
  iconStyle: {
    position: 'absolute',
    left: 5,
    top: 8,
    zIndex: 1
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40
  }
};

export default Input;
