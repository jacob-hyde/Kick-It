import React from 'react';
import {Text} from 'react-native-elements';
import { connect } from 'react-redux';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import {View, Image} from 'react-native';
import { reduxForm } from 'redux-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Container, Button, Section, Row, SectionHeader} from './../../Components/Common';
import Form from './../../Components/Form';
import Segment from './../../Components/Segment';

class TaperType extends React.Component {

  constructor(props){
    super(props);
    this.segmentButtonPressed = this.segmentButtonPressed.bind(this);
  }

  segmentButtonPressed(e) {
    console.log(e);
    console.log(e.nativeEvent);
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <Segment
          segments={['Staging Taper', 'Percentage Taper']}
          active={0}
        />
        <KeyboardAwareScrollView scrollEnabled={false} contentContainerStyle={{flex:1}}>
          <Container containerStyle={{...ifIphoneX({paddingTop: 20}, {paddingTop: 20})}}>
            <Row>
              <Section>

              </Section>
              <Section containerStyle={{marginTop: 0}}>


              </Section>
              <Section containerStyle={{flex: 1}}>
                <Button
                  buttonContainer={{alignSelf: 'flex-end', marginBottom: 40}}
                  onPress={() => {

                  }}
                >
                Preview
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


export default connect(null, null)(reduxForm({form: 'setup'})(TaperType));
