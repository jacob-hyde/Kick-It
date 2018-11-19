import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {Field } from 'redux-form';
import {Form, FormGroup} from './../Common';
import Select from './Types/Select';
import Input from './Types/Input';
import DateInput from './Types/DateInput';

class FormWrapper extends React.Component{

  render(){
    const createLabel = (label) => {
      if(!label) return;
      return <Text fontFamily="Roboto-Regular" style={styles.labelStyle}>{label}</Text>;
    };

    const createField = (field) => {
      const label = createLabel(field.label);
      switch(field.type){
        case 'select':
          return (
                  <View style={styles.formLayout}>
                    {label}
                    <Field
                      name={field.name}
                      placeholder={field.placeholder}
                      values={field.values}
                      containerStyle={styles.fieldStyle}
                      component={Select}
                      key={field.key}
                    />
                  </View>
                );
        case 'number':
          return (
                  <View style={styles.formLayout}>
                    {label}
                    <Field
                      name={field.name}
                      placeholder={field.placeholder}
                      containerStyle={styles.fieldStyle}
                      component={Input}
                      key={field.key}
                      inputStyle={{textAlign: 'right'}}
                      number
                    />
                  </View>
                );
          case 'date':
            return (
                  <View style={styles.formLayout}>
                    {label}
                    <Field
                      name={field.name}
                      placeholder={field.placeholder}
                      containerStyle={styles.fieldStyle}
                      component={DateInput}
                      key={field.key}
                    />
                  </View>
                );
        default:
          return;
      }
    };

    const createFields = (group) => {
      return group.map((field) => {
        return (
          <FormGroup>{createField(field)}</FormGroup>
        );
      });
    };

    return(
      <Form>
        {this.props.fields.map((group) => {
          return createFields(group);
        })}
      </Form>
    );
  }

}

FormWrapper.propTypes = {
  fields: PropTypes.array
};

const styles = StyleSheet.create({
  formLayout: {
    flexDirection: 'row',
    flexBasis: '100%',
    alignItems: 'center'
  },
  labelStyle: {
    flex: 1
  },
  fieldStyle: {
    flex: 1,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingLeft: 5
  }
});

export default FormWrapper;
