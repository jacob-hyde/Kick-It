import React from 'react';
import {Text} from 'react-native-elements';
import { connect } from 'react-redux';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import {View, Image} from 'react-native';
import { reduxForm } from 'redux-form';
import {Container, Button, Section, Row, SectionHeader} from './../../Components/Common';
import Form from './../../Components/Form';
import {setCurrentForm} from './../../Actions/CurrentFormActions';

class SetupView extends React.Component {

  render(){
    return (
      <View style={{flex: 1}}>
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
                        placeholder: 'mg',
                        key: 'startDose'
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

                }}
              >
              Continue
              </Button>
            </Section>
          </Row>
        </Container>
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
