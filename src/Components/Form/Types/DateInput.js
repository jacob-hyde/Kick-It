import React from 'react';
import {View} from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

class DateInput extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      date: moment().format('MM-DD-YY')
    };
  }

  onSelected(){
    if(this.state.isSelected){
      this.setState({...this.state, isSelected: false});
    }else{
      this.setState({...this.state, isSelected: true});
    }
  }

  render(){
    return(
      <View style={[styles.containerStyle, this.props.containerStyle || {}]}>
        <DatePicker
            style={{width: 200}}
            date={this.state.date}
            mode="date"
            placeholder={this.state.date}
            format="MM-DD-YY"
            minDate={this.props.placeholder}
            maxDate="2020-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            style={[styles.inputStyle, {height: 40, borderWidth: 0, width: '100%'}]}
            customStyles={{
              dateInput: {
                borderWidth: 0,
                alignItems: 'flex-end',
              },
              btnText: {
                height: 40,
                paddingHorizontal: 0
              }
            }}

            onDateChange={(date) => {
              this.state.date = moment(date).format('MM-DD-YY');
              this.props.input.onChange(date);
            }}
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

export default DateInput;
