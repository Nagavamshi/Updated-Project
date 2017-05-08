import React, { Component } from 'react';

class PackageCard extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    
    return (
      <div className="package-card">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.packages.name}</h3>
          </div>
          <div className="panel-body">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    Service Contract <br />

                  </td>
                  <td>
                    
                  </td>
                </tr>
                <tr>
                  <td>
                    Security Coding
                  </td>
                  <td>

                  </td>
                </tr>
                <tr>
                  <td>
                    Pre-Paid Maintence
                  </td>
                  <td>

                  </td>
                </tr>
                <tr>
                  <td>
                    Road Hazard
                  </td>
                  <td>

                  </td>
                </tr>
                <tr>
                  <td>
                    Total Loss Protection
                  </td>
                  <td>

                  </td>
                </tr>
                <tr>
                  <td>
                    Appearance Protection
                  </td>
                  <td>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <ul className="list-group">
          <li className="list-group-item">__24 Months = </li>
          <li className="list-group-item">__36 Months = </li>
          <li className="list-group-item">__48 Months = </li>
          <li className="list-group-item">__60 Months = </li>
      </ul>
    </div>
    );
  }
}

export default PackageCard;