import React from 'react';
import { Button, Segment as NBSegment, Text } from 'native-base';

class Segment extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      active: this.props.active
    };
    this.segmentButtonPressed = this.segmentButtonPressed.bind(this);
  }

  segmentButtonPressed(index) {
    
  }

  createButtons() {
    return this.props.segments.map((segment, i) => {
      let props = {index: i};
      if (i === 0) {
        props.first = true;
      } else if (i === this.props.segments.length - 1) {
        props.last = true;
      }
      return (
        <Button key={i} onPress={this.segmentButtonPressed} {...props}>
          <Text>{segment}</Text>
        </Button>
      );
    })
  }

  render() {
    return (
      <NBSegment>
        {createButtons()}
      </NBSegment>
    );
  }

}

export default Segment;
