import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, Picker} from 'native-base';
import ScrollableSelect from 'react-native-scrollable-select';

class Select extends React.Component{

  createPickerItem(item){
    return <Picker.Item label={item} value={item} key={item} />;
  }

  createPickerItems(items){
    return items.map(item => this.createPickerItem(item));
  }

  render(){
    if(this.props.scrollable){
      return (
        <View style={[styles.containerStyle, this.props.containerStyle || {}]}>
          <ScrollableSelect
            onSelect={this.props.input.onChange}
            labelValue={this.props.input.value}
            style={styles.pickerStyle}
            placeholder='1 Week'
            values={this.props.values}
            customStyles={{
              inputStyle:{borderWidth: 0},
              mask: {width: '100%'}
            }}
          />
        </View>
      );
    }
    return (
      <View style={[styles.containerStyle, {paddingLeft: 5}, this.props.containerStyle || {}]}>
        <Picker
        selectedValue={this.props.input.value}
        onValueChange={this.props.input.onChange}
        mode="dropdown"
        iosHeader="Shift"
        iosIcon={<Icon name="ios-arrow-down-outline" style={{marginTop: 4}} />}
        style={styles.pickerStyle}
        textStyle={{paddingLeft: 0}}
        placeholder={this.props.placeholder}
        >
        {this.createPickerItems(this.props.values)}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 40,
  },
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  pickerStyle: {
    alignSelf: 'auto',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    height: 'auto',
  }
});

export default Select;
