import React from 'react';
import {Text, Icon} from 'react-native-elements';
import { connect } from 'react-redux';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import {View, Image, TouchableOpacity} from 'react-native';
import PinView from 'react-native-pin-view';
import {Container, Button, Section, Row} from './../../Components/Common';
import {didAcceptTerms} from './../../Actions/SetupActions';
import {setInitialView, setInitialSwitch} from './../../Actions/InitialViewActions';
import material from './../../assets/theme/variables/material';

class PinCreate extends React.Component {

  render(){
    return (
      <View style={{flex: 1}}>
        <Container containerStyle={{...ifIphoneX({paddingTop: 60}, {paddingTop: 20})}}>
          <Image
            source={require('./../../assets/logo.png')}
            style={{height: 100, resizeMode: 'contain', alignSelf: 'center'}}
          />
          <Row>
            <Text style={styles.pageText} fontFamily="Roboto-Regular">Create a PIN</Text>
            <Section>
              <PinView
                buttonBgColor={material.BUTTON_BACKGROUND_COLOR}
                pinLength={4}
                onComplete={(val)=>{console.log(val)}}
              />
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


export default connect(null, {didAcceptTerms, setInitialSwitch, setInitialView})(PinCreate);
