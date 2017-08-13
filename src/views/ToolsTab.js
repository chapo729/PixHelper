import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import DropDownLists from './DropDownListEvs.js';
import DropDownListRats from './DropDownListRatios.js';
import DropDownListGns from './DropDownListGns.js';



const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  headline2: {
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class SwipeableTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Exposure Value" value={0} />
          <Tab label="Ratios" value={1} />
          <Tab label="Guide Numbers" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <strong><h2 style={styles.headline2}>Exposures</h2></strong>
            <DropDownLists />
          </div>
          <div style={styles.slide}>
            <strong><h2 style={styles.headline2}>Ratios</h2></strong>
            <DropDownListRats />
          </div>
          <div style={styles.slide}>
            <strong><h2 style={styles.headline2}>Guide Numbers</h2></strong>
            <DropDownListGns />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
