import React from 'react';
import {
        Animated,
        TouchableHighlight,
        StyleSheet,
        Picker,
        Modal,
        Text,
        View,
        Platform,
        KeyBoard
      } from 'react-native';
import PropTypes from 'prop-types';

const SUPPORTED_ORIENTATIONS = ['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right'];

class ScrollableSelect extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: '',
      modalVisible: false,
      animatedHeight: new Animated.Value(0),
      allowPointerEvents: true
    };
  }

  onSelected(itemValue, itemPosition){
    if(typeof this.props.onChange === 'function'){
      this.props.onChange(itemValue, itemPosition);
    }
  }

  setModalVisible(visible) {
   const {height, duration} = this.props;

   // slide animation
   if (visible) {
     this.setState({modalVisible: visible});
     return Animated.timing(
       this.state.animatedHeight,
       {
         toValue: height,
         duration
       }
     ).start();
   } else {
     return Animated.timing(
       this.state.animatedHeight,
       {
         toValue: 0,
         duration
       }
     ).start(() => {
       this.setState({modalVisible: visible});
     });
   }
  }

  onStartShouldSetResponder(e) {
    return true;
  }

  onMoveShouldSetResponder(e) {
    return true;
  }

  onPressMask() {
    if (typeof this.props.onPressMask === 'function') {
      this.props.onPressMask();
    } else {
      this.onPressCancel();
    }
  }

  onPressCancel() {
    this.setModalVisible(false);

    if (typeof this.props.onCloseModal === 'function') {
      this.props.onCloseModal();
    }
  }

  onPressConfirm() {
    this.onSelected();
    this.setModalVisible(false);

    if (typeof this.props.onCloseModal === 'function') {
      this.props.onCloseModal();
    }
  }

    getTitleElement() {
    const {value, placeholder, customStyles, allowFontScaling} = this.props;

    if (!value && placeholder) {
      return (
        <Text
          allowFontScaling={allowFontScaling}
          style={[_styles.placeholderText, customStyles.placeholderText]}
        >
          {placeholder}
        </Text>
      );
    }
    return (
      <Text allowFontScaling={allowFontScaling} style={[_styles.dateText, customStyles.dateText]}>
        {value}
      </Text>
    );
  }

  render(){
    const {
            styles,
            disabled,
            allowFontScaling,
            TouchableComponent
          } = this.props;

    const inputStyles = [
      _styles.inputStyle,
      disabled && _styles.disabled,
    ];

    return (
      <TouchableComponent
        style={[_styles.inputTouch, styles]}
        underlayColor={'transparent'}
      >
        <View style={[_styles.inputTouchBody, styles.dateTouchBody]}>
          <View style={inputStyles}>
            {this.getTitleElement()}
          </View>
            {
            Platform.OS === 'ios' &&
            <Modal
              transparent
              animationType="none"
              visible={this.state.modalVisible}
              supportedOrientations={SUPPORTED_ORIENTATIONS}
              onRequestClose={() => { this.setModalVisible(false); }}
            >
              <View style={{flex: 1}}>
                <TouchableComponent
                  style={_styles.datePickerMask}
                  activeOpacity={1}
                  underlayColor={'#00000077'}
                  onPress={this.onPressMask}
                >
                <TouchableComponent
                  underlayColor={'#fff'}
                  style={{flex: 1}}
                >
                  <Animated.View
                    style={[_styles.datePickerCon, {height: this.state.animatedHeight},
                      styles.datePickerCon]}
                  >
                    <View pointerEvents={this.state.allowPointerEvents ? 'auto' : 'none'}>
                      <Picker
                        selectedValue={this.state.value}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue) => this.setState({value: itemValue})}
                      >
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                      </Picker>
                    </View>
                    <TouchableComponent
                      underlayColor={'transparent'}
                      onPress={this.onPressCancel}
                      style={[_styles.btnText, _styles.btnCancel, styles.btnCancel]}
                    >
                      <Text
                        allowFontScaling={allowFontScaling}
                        style={[_styles.btnTextText, _styles.btnTextCancel, styles.btnTextCancel]}
                      >
                        Cancel
                      </Text>
                    </TouchableComponent>
                    <TouchableComponent
                      underlayColor={'transparent'}
                      onPress={this.onPressConfirm}
                      style={[_styles.btnText, _styles.btnConfirm, styles.btnConfirm]}
                    >
                        <Text
                          allowFontScaling={allowFontScaling}
                          style={[_styles.btnTextText, styles.btnTextConfirm]}
                        >
                        Confirm
                      </Text>
                    </TouchableComponent>
                  </Animated.View>
                </TouchableComponent>
              </TouchableComponent>
              </View>
            </Modal>
          }
        </View>
      </TouchableComponent>
    );
  }

}

ScrollableSelect.defaultProps = {
  mode: 'date',
  androidMode: 'default',
  date: '',
  // component height: 216(DatePickerIOS) + 1(borderTop) + 42(marginTop), IOS only
  height: 259,

  // slide animation duration time, default to 300ms, IOS only
  duration: 300,
  customStyles: {},

  // whether or not show the icon
  disabled: false,
  allowFontScaling: true,
  placeholder: '',
  TouchableComponent: TouchableHighlight,
  modalOnResponderTerminationRequest: e => true
};

ScrollableSelect.propTypes = {
  onChange: PropTypes.func,
  values: PropTypes.array
};

const _styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 0,
    alignItems: 'flex-end',
    flex: 1,
    height: 40,
    justifyContent: 'center'
  },
  disabled: {
    backgroundColor: '#eee'
  },
  inputTouchBody: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default ScrollableSelect;
