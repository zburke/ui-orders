import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Row, Col } from '@folio/stripes-components/lib/LayoutGrid';
import KeyValue from '@folio/stripes-components/lib/KeyValue';
import FormatDate from '../../Utils/FormatDate';
import css from './PODetailsView.css';

class PODetailsView extends React.Component {
  static propTypes = {
    initialValues: PropTypes.object
  }

  render() {
    const { initialValues } = this.props;
    const dataVal = initialValues.agreements.length >= 1 ? initialValues.agreements : false;
    return (
      <Row>
        <Col xs={3}>
          <KeyValue label="Vendor" value={_.get(dataVal, 'vendor')} />
        </Col>
        <Col xs={3}>
          <KeyValue label="PO Number" value={_.get(dataVal, 'po_number')} />
        </Col>
        <Col xs={3}>
          <KeyValue label="Assigned To" value={_.get(dataVal, 'assigned_to')} />
        </Col>
        <Col xs={3}>
          <KeyValue label="Created On" value={FormatDate(_.toString(_.get(dataVal, 'created')))} />
        </Col>
        <Col xs={3}>
          <KeyValue label="Created By" value={FormatDate(_.toString(_.get(dataVal, 'created_by')))} />
        </Col>
      </Row>
    );
  }
}

export default PODetailsView;