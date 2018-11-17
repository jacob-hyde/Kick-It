import React from 'react';
import moment from 'moment';
import {Card} from './../Components/Common';
import {Calendar as RNCalendar} from './../Components/Calendar';

class Calendar extends React.Component {

  componentWillMount(){
    // this.getSchedule();
  }

  getSchedule(){
    const startingDose = 40; //40 mg
    const taperDurationPeriod = 2; //2 weeks
    const startDate = moment();
    let dosages = {1: {}};
    let dose = 38;

    let day = moment(startDate);
    let dayCounter = 1;
    let i = 0;
    let stage = 1;
    while(dose > 0){
      if(dayCounter == 14){
        dayCounter = 1;
        dose -= 2;
        stage++;
        dosages[stage] = {};
      }
      let morningDose = (dose / 2) - (stage % 2);
      dosages[stage][day.toISOString()] = {morning: morningDose, night: dose-morningDose};
      day = moment(day).add(1, 'd');
      dayCounter++;
      i++;
    }
    console.log(dosages);
  }

  render(){
    return(
      <Card>
        <RNCalendar
          // Initially visible month. Default = Date()
          current={moment().toDate()}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={moment().add(1, 'y').toDate()}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {console.log('selected day', day)}}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {console.log('month changed', month)}}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}

          theme={{
            dayTextColor: '#000',
            textDayFontFamily: 'Roboto-Light',
            textMonthFontFamily: 'Roboto-Light',
            textDayHeaderFontFamily: 'Roboto-Light',
            selectedDayTextColor: '#ffffff'
          }}

           // Collection of dates that have to be colored in a special way. Default = {}
          markedDates={
            {'2018-11-20': {textColor: 'green'},
             '2018-11-22': {startingDay: true, color: 'green'},
             '2018-11-23': {selected: true, endingDay: true, color: 'green'},
             '2018-12-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
            }}
          // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
          markingType={'period'}
        />
      </Card>
    );
  }
}

export default Calendar;
