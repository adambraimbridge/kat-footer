import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class FooterContactDetails extends Component {

  constructor(props){
    super(props);
  }

  shoudlComponentUpdate(nextProps, nextState){
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  render(){
    const details = this.props.footerContactDetails;
    return(
      <div className="kat-footer__contact-container">
        <div className="kat-footer__contact-item">{details.intro}</div>
        <div className="kat-footer__contact-item">
          <a href={`tel: ${details.ukPhoneNumber}`}>{details.ukPhoneNumber}</a>
          <span>{details.phoneDelimiter}</span>
          <a href={`tel: ${details.usPhoneNumber}`}>{details.usPhoneNumber}</a>
        </div>
        <div className="kat-footer__contact-item">
          <a href={`mailto: ${details.email}`}>{details.email}</a>
        </div>
        <br></br>
      </div>
      );
  }
}

FooterContactDetails.propTypes = {
  footerContactDetails: PropTypes.object.isRequired
};

const mapStateToProps = (store) => {
  return {
    footerContactDetails: store.KatFooterNs.footerContactDetails
  };
};

export default connect(mapStateToProps)(FooterContactDetails);