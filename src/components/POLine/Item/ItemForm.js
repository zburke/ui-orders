import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
import { Row, Col } from '@folio/stripes-components/lib/LayoutGrid';
import Button from '@folio/stripes-components/lib/Button';
import TextField from '@folio/stripes-components/lib/TextField';
import TextArea from '@folio/stripes-components/lib/TextArea';
import { Required } from '../../Utils/Validate';

class FundForm extends Component {
  render() {
    return (
      <Row>
        <Col xs={6}>
          <Field label="Title" name="title" id="title" component={TextField} fullWidth />
        </Col>
        <Col xs={6}>
          <Field label="Receiving Note" name="receiving_note" id="receiving_note" component={TextField} fullWidth />
        </Col>
        <Col xs={6}>
          <Field label="Product ID" name="product_id" id="product_id" component={TextArea} style={{ height: '82px' }} fullWidth />
        </Col>
        <Col xs={6}>
          <Field label="Subscription From" name="subscription_from" id="subscription_from" component={TextField} fullWidth />
        </Col>
        <Col xs={6}>
          <Field label="Material Type" name="subscription_from" id="subscription_from" component={TextField} fullWidth />
        </Col>
        <Col xs={6}>
          <Field label="Subscription Interval" name="subscription_interval" id="subscription_interval" component={TextField} fullWidth />
        </Col>
        <Col xs={6}>
          <Field label="Subscription To" name="subscription_to" id="subscription_to" component={TextField} fullWidth />
        </Col>
        <Col xs={12}>
          <Field label="Description" name="description" id="description" component={TextArea} fullWidth />
        </Col>
      </Row>
    );
  }
}

export default FundForm;
