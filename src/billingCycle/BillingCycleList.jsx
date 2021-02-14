import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList, showUpdate, showDelete } from './BillingCycleActions';

class BillingCycleList extends Component {

    // componentWillMount() {
    //     this.props.getList();
    // }

    renderRows() {
        const list = this.props.list || [];
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <div className="btn-group">
                        <button type="button" className="btn btn-warning"
                            onClick={() => this.props.showUpdate(bc)}>
                            <i className="fa fa-pencil" />
                        </button>
                        <button type="button" className="btn btn-danger"
                            onClick={() => this.props.showDelete(bc)}>
                            <i className="fa fa-trash-o" />
                        </button>
                    </div>
                </td>
            </tr>
        ));
    }

    render() {
        //console.log("Array de BCs: ", this.props.list);
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className="table-actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }

}

const mapStateToProps = state => ({ list: state.billingCycle.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);