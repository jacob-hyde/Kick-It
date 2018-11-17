import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Platform, TouchableOpacity, TouchableNativeFeedback, Animated } from 'react-native';
import material from './../assets/theme/variables/material';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Subtitle, StyleProvider, Item, Input } from 'native-base';

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: (Platform.OS !== 'ios' ? 2 : 0),
    borderBottomColor: (Platform.OS !== 'ios' ? material.toolbarDefaultBorder : 'transparent')
  }
});

export default class BaseHeader extends React.Component {

  toggleDrawer(){
    this.props.navigation.openDrawer();
  }

	render(){
		return(
			<SafeAreaView style={{backgroundColor: material.toolbarDefaultBg}}>
        <Header style={[styles.header, {paddingBottom: 5, paddingTop: 0}]}>
          <Left style={[Platform.OS === 'ios' ? {flex: 1} : {flex: 0.04}]}>
            <TouchableOpacity>
              <Button transparent onPress={this.toggleDrawer.bind(this)}>
                <Icon style={{fontSize: 24, color: '#fff'}} name='menu' />
              </Button>
            </TouchableOpacity>
          </Left>
          <Body style={{flex: 1}}>
            <Title style={{fontSize: 24, alignSelf: 'center'}}>{this.props.title}</Title>
          </Body>
          <Right style={{flex: 1}} />
        </Header>
			</SafeAreaView>
		);
	}

}
