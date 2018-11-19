import React from 'react';
import {Text, Icon} from 'react-native-elements';
import { connect } from 'react-redux';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import {View, Image, TouchableOpacity} from 'react-native';
import {Container, Button, Section, Row} from './../../Components/Common';
import {didAcceptTerms} from './../../Actions/SetupActions';
import {setInitialView, setInitialSwitch} from './../../Actions/InitialViewActions';
import {setCurrentForm} from './../../Actions/CurrentFormActions';

class WelcomeView extends React.Component {

  render(){
    return (
      <View style={{flex: 1}}>
        <Container containerStyle={{...ifIphoneX({paddingTop: 60}, {paddingTop: 20})}}>
          <Image
            source={require('./../../assets/logo.png')}
            style={{height: 100, resizeMode: 'contain', alignSelf: 'center'}}
          />
          <Row>
            <Text style={styles.pageText} fontFamily="Roboto-Regular">Welcome to Kick It</Text>
            <Section>
              <Text>
              Cras mattis consectetur purus sit amet fermentum.{'\n\n'}Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              {'\n\n'}
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus.
              </Text>
            </Section>
            <Section containerStyle={{flex: 1}}>
              <Button
                buttonContainer={{alignSelf: 'flex-end', marginBottom: 40}}
                onPress={() => {
                  this.props.didAcceptTerms();
                  // this.props.setInitialSwitch('Auth');
                  // this.props.setInitialView('PinCreate');
                  this.props.setCurrentForm('setup');
                  this.props.navigation.navigate('SetupView');
                }}
              >
              I Accept
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
    marginBottom: 20
  }
};


export default connect(null, {didAcceptTerms, setInitialSwitch, setInitialView, setCurrentForm})(WelcomeView);
