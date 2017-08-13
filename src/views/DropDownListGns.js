import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 150,
    float: 'right',
    marginTop:'-20px',
    marginBottom: '10px',
    textAlign: 'justify',
    marginRight: '10px',
  },
  divStyle: {
    border: '1px solid #aaaaaa',
    borderRadius: '10px',
    marginTop: '35px',
    marginRight: '25px',
    marginLeft: '25px',
  },
  rowsStyle: {
    textAlign: 'justify',
    marginBottom: '20px',
    marginLeft: '25%',
  },
};

export default class DropDownListGns extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 0};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
         <div style={styles.divStyle}>
              <p style={styles.rowsStyle}>
              <span><strong>Gn:</strong></span><DropDownMenu
                  value={this.state.value}
                  onChange={this.handleChange}
                  style={styles.customWidth}
                  autoWidth={false}
                >
                  <MenuItem value={0} primaryText="0" />
                  <MenuItem value={1} primaryText="1" />
                  <MenuItem value={2} primaryText="2" />
                  <MenuItem value={3} primaryText="3" />
                  <MenuItem value={4} primaryText="4" />
                  <MenuItem value={5} primaryText="5" />
                  <MenuItem value={6} primaryText="6" />
                  <MenuItem value={7} primaryText="7" />
                </DropDownMenu>
            </p>
            <p style={styles.rowsStyle}>
                <span><strong>Aperture:</strong></span><DropDownMenu
                  value={this.state.value}
                  onChange={this.handleChange}
                  style={styles.customWidth}
                  autoWidth={false}
                >
                  <MenuItem value={0} primaryText="f/1" />
                  <MenuItem value={1} primaryText="f/1.4" />
                  <MenuItem value={2} primaryText="f/2" />
                  <MenuItem value={3} primaryText="f/2.8" />
                  <MenuItem value={4} primaryText="f/4" />
                  <MenuItem value={5} primaryText="f/5.6" />
                  <MenuItem value={6} primaryText="f/8" />
                  <MenuItem value={7} primaryText="f/11" />
                  <MenuItem value={8} primaryText="f/16" />
                  <MenuItem value={9} primaryText="f/22" />
                  <MenuItem value={10} primaryText="f/32" />
                </DropDownMenu>
            </p>
            <p style={styles.rowsStyle}>
                <span><strong>Distance:</strong></span><DropDownMenu
                  value={this.state.value}
                  onChange={this.handleChange}
                  style={styles.customWidth}
                  autoWidth={false}
                >
                <MenuItem value={0} primaryText="0" />
                <MenuItem value={1} primaryText="1" />
                <MenuItem value={2} primaryText="2" />
                <MenuItem value={3} primaryText="3" />
                <MenuItem value={4} primaryText="4" />
                <MenuItem value={5} primaryText="5" />
                <MenuItem value={6} primaryText="6" />
                <MenuItem value={7} primaryText="7" />
                </DropDownMenu>
            </p>
            <p style={styles.rowsStyle}>
                <span><strong>ISO:</strong></span><DropDownMenu
                  value={this.state.value}
                  onChange={this.handleChange}
                  style={styles.customWidth}
                  autoWidth={false}
                >
                <MenuItem value={0} primaryText="100" />
                <MenuItem value={1} primaryText="200" />
                <MenuItem value={2} primaryText="800" />
                <MenuItem value={3} primaryText="1600" />
                <MenuItem value={4} primaryText="3200" />
                <MenuItem value={5} primaryText="6400" />
                <MenuItem value={6} primaryText="12800" />
                <MenuItem value={7} primaryText="25600" />
                <MenuItem value={8} primaryText="51200" />
                <MenuItem value={9} primaryText="102400" />
                <MenuItem value={10} primaryText="204800" />
                </DropDownMenu>
            </p>
          </div>
      </div>
    );
  }
}
