import React from 'react';
import { connect } from 'react-redux';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import {Image} from 'react-native';
import {Container, Button, Section, Row} from './../../Components/Common';

class LoginView extends React.Component {
  componentWillReceiveProps(nextProps){
    if(nextProps.auth.access_token !== ''){
      nextProps.navigation.navigate('App');
    }
  }
  render(){
    return (
      <Container containerStyle={{...ifIphoneX({paddingTop: 100}, {paddingTop: 20})}}>
        <Image
          source={require('./../../assets/logo_full.png')}
          style={{height: 150, resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Row containerStyle={{justifyContent: 'center'}}>
          <Section>
            <Button
              onPress={() => {
                this.props.navigation.push('EmailForm');
              }}
            >
              Sign in with Email
            </Button>
          </Section>
          <Section>
            <Button
              onPress={() => {
                this.props.navigation.navigate('App');
              }}
            >
              Continue without signing in
            </Button>
          </Section>
        </Row>
      </Container>
    );
  }
}


export default connect(null, null)(LoginView);
