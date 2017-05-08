import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PackageCard from '../../common/packageCard';
import {getPackageDetails} from '../../../actions';


class InvoiceView extends Component {
  constructor(props) {
    super(props);    
  }
  
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-9'>
            <table>
              <tbody>
                <tr>
                  <td>Selling Price:</td>
                  <td></td>
                  <td>Tread In:</td>
                  <td></td>
                  <td>Payoff:</td>
                  <td></td>
                  <td>Cash Down:</td>
                  <td></td>
                  <td>Deposit:</td>
                  <td></td>
                  <td>Rebate:</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Base Amt Financed:</td>
                  <td></td>
                  <td>Total Amt Financed:</td>
                  <td></td>
                  <td>Term:</td>
                  <td></td>
                  <td>Rate:</td>
                  <td></td>
                  <td>Base Payment:</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='row'>
          {
            this.props.packages.map((packages, i) => (
              <div
                key={i}  
                className={`col-md-${(12 / this.props.packages.length)}`}>
                <PackageCard
                  packages={packages}
                />
              </div>
            ))
          }
        </div>

        <div className='row'>
          <div className='col-md-3'>
            <span>Signature: _______________</span>
          </div>
          <div className='col-md-9' style={{textAlign: 'right'}}>
            <span>Prepared By:</span><span>xxxxxxxxxxx on TT:MM:SS</span>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    packages: [
      {
        name: 'Platinum'
      },
      {
        name: 'Gold'
      },
      {
        name: 'Silver'
      },
      {
        name: 'Basic'
      },
    ] || state.packages
  }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        getPackageDetails
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceView);