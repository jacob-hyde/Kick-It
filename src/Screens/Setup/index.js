import React from 'react';
import {Text} from 'react-native-elements';
import { connect } from 'react-redux';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import {View, Image} from 'react-native';
import { reduxForm } from 'redux-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Container, Button, Section, Row, SectionHeader} from './../../Components/Common';
import Form from './../../Components/Form';
import {setCurrentForm} from './../../Actions/CurrentFormActions';

class SetupView extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      today: new Date()
    }
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <KeyboardAwareScrollView scrollEnabled={false} contentContainerStyle={{flex:1}}>
          <Container containerStyle={{...ifIphoneX({paddingTop: 60}, {paddingTop: 20})}}>
            <Image
              source={require('./../../assets/logo.png')}
              style={{height: 100, resizeMode: 'contain', alignSelf: 'center'}}
            />
            <Row>
              <Text style={styles.pageText} fontFamily="Roboto-Regular">Let's Get Setup</Text>
              <Section>
                <SectionHeader title="Medication" underline />
              </Section>
              <Section containerStyle={{marginTop: 0}}>
                <Form
                  fields={
                    [
                      [
                        {
                          name: 'medication_type',
                          type: 'select',
                          placeholder: 'Xanax',
                          values: ['Xanax', 'Valium'],
                          key: 'medType'
                        },
                        {
                          name: 'starting_dose',
                          type: 'number',
                          label: 'Starting Dose:',
                          placeholder: '40mg',
                          key: 'startDose'
                        }
                      ]
                    ]
                  }
                />
              </Section>
              <Section>
                <SectionHeader
                  title="Taper Schedule"
                  subtitle="You can customize this later"
                  underline
                />
              </Section>
              <Section containerStyle={{marginTop: 0}}>
                <Form
                  fields={
                    [
                      [
                        {
                          name: 'start_date',
                          type: 'date',
                          label: 'Starting Date:',
                          placeholder: this.state.today,
                          key: 'startDate'
                        },
                        {
                          name: 'step_length',
                          type: 'scrollableSelect',
                          label: 'Step Length:',
                          placeholder: '2 Weeks',
                          values: [{label: '1 Week', value: 1}, {label: '2 Weeks', value: 2}],
                          key: 'startDate'
                        },
                        {
                          name: 'dosages_day',
                          type: 'number',
                          label: 'Dosages a Day:',
                          placeholder: '2',
                          key: 'dosagesDay'
                        }
                      ]
                    ]
                  }
                />
              </Section>
              <Section containerStyle={{flex: 1}}>
                <Button
                  buttonContainer={{alignSelf: 'flex-end', marginBottom: 40}}
                  onPress={() => {
                    this.props.navigation.navigate('TaperTypeView');
                  }}
                >
                Continue
                </Button>
              </Section>
            </Row>
          </Container>
        </KeyboardAwareScrollView>
      </View>
    );
  }

}

const styles = {
  pageText: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10
  }
};


export default connect(null, {setCurrentForm})(reduxForm({form: 'setup'})(SetupView));
