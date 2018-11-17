import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Platform,
  SafeAreaView
} from 'react-native';
import { Container, Content, Header, Icon, Input, Item} from 'native-base';
import { DrawerItems } from 'react-navigation';

//----------------------------------------------------------------------------------------------------------------------

const styles = StyleSheet.create({
  drawerItem: {
    borderBottomColor: '#F57C00',
    borderBottomWidth: 1,
    borderTopColor: '#F57C00',
    borderBottomWidth: 1,
  }
});

//----------------------------------------------------------------------------------------------------------------------

const DrawerMenu = (props) => (
  <Container style={{backgroundColor: '#FF9800'}}>
    <SafeAreaView>
      <Header searchBar rounded style={{paddingLeft: 10, paddingRight: 10, backgroundColor: 'transparent', marginTop: (Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight),}}>
        <Item>
          <Input placeholder="Search" />
        </Item>
      </Header>
    </SafeAreaView>
    <Content>
      <DrawerItems style={{padding: 0}} labelStyle={{color: '#fff'}} itemStyle={styles.drawerItem} {...props} />
    </Content>
  </Container>
);

//----------------------------------------------------------------------------------------------------------------------

module.exports = DrawerMenu;