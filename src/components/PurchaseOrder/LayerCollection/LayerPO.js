import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import transitionToParams from '@folio/stripes-components/util/transitionToParams';
import { Layer } from '@folio/stripes-components';

import { ReceiveItems, Received } from '../Receive';
import { POForm } from '../PO';
import { POLineForm } from '../POLine';
import Users from '../Users';
import { runInThisContext } from 'vm';

class LayerPO extends Component {
  static propTypes = {
    initialValues: PropTypes.object,
    location: PropTypes.object.isRequired,
    stripes: PropTypes.object.isRequired,
    onCancel: PropTypes.func,
    parentResources: PropTypes.object.isRequired,
    parentMutator: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.transitionToParams = transitionToParams.bind(this);
    this.connectedPOForm = this.props.stripes.connect(POForm);
    this.connectedUsers = this.props.stripes.connect(Users);
    this.connectedPOLineForm = this.props.stripes.connect(POLineForm);
    this.connectedReceiveItems = this.props.stripes.connect(ReceiveItems);
    this.connectedReceived = this.props.stripes.connect(Received);
  }

  updatePO(data) {
    console.log(data);
    this.props.parentMutator.records.PUT(data).then(() => {
      this.props.onCancel();
    });
  }

  updatePOLine(data) {
    this.props.parentMutator.poLine.PUT(data).then(() => {
      this.props.onCancel();
    });
  }

  render() {
    const { initialValues, location } = this.props;
    // const newRecordInitialValues = { new_record: true, po_number: initialValues.po_number };
    const query = location.search ? queryString.parse(location.search) : {};

    return (
      <div className="layerCollection">
        <Layer isOpen={query.layer ? query.layer === 'edit' : false} label="Edit Order Dialog">
          <this.connectedPOForm initialValues={initialValues} onSubmit={(record) => { this.updatePO(record); }} {...this.props} />
        </Layer>
        <Layer isOpen={query.layer ? query.layer === 'users' : false} label="Users Order Dialog">
          <this.connectedUsers {...this.props} />
        </Layer>
        {/* <Layer isOpen={query.layer ? query.layer === 'create-po-line' : false} label="Create PO Line Dialog">
          <this.connectedPOLineForm initialValues={newRecordInitialValues} onSubmit={(record) => { this.updatePOLine(record); }} {...this.props} />
        </Layer> */}
        <Layer isOpen={query.layer ? query.layer === 'receive-items' : false} label="Receive Items">
          <this.connectedReceiveItems openReceived={this.openReceived} {...this.props} />
        </Layer>
        <Layer isOpen={query.layer ? query.layer === 'received' : false} label="Received">
          <this.connectedReceived {...this.props} />
        </Layer>
      </div>
    );
  }
}

export default LayerPO;