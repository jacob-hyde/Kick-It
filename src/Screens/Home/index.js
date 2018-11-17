import React from 'react';
import {Text, Icon} from 'react-native-elements';
import { connect } from 'react-redux';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import {View, Image, TouchableOpacity} from 'react-native';
import {Container, Button, Section, Row} from './../../Components/Common';
import BaseHeader from './../../Components/BaseHeader';
import DropDownMenu from './../../Components/DropDownMenu';
import DropDownMenuButton from './../../Components/DropDownMenuButton';
import Calendar from './../../Features/Calendar';

class LoginView extends React.Component {
  componentWillReceiveProps(nextProps){
    if(nextProps.auth.access_token !== ''){
      nextProps.navigation.navigate('App');
    }
  }

  toggleMenu(){
    this.dropDownMenu.toggle();
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <BaseHeader title="Kick It" navigation={this.props.navigation}/>
        <Container>
          <Row>
            <Section containerStyle={{zIndex: 2}}>
              <Text style={{fontSize: 18, flex: 1}} fontFamily="Roboto-Regular">Benzo Taper</Text>
              <TouchableOpacity onPress={this.toggleMenu.bind(this)}>
                <Icon style={{flex: 1}} name="more-vert" />
              </TouchableOpacity>
              <DropDownMenu ref={(drop_down_menu) => this.dropDownMenu = drop_down_menu}>
                <DropDownMenuButton>Settings</DropDownMenuButton>
                <DropDownMenuButton>More</DropDownMenuButton>
              </DropDownMenu>
            </Section>
            <Section column>
              <Calendar />
            </Section>
          </Row>
        </Container>
      </View>
    );
  }
}


export default connect(null, null)(LoginView);
