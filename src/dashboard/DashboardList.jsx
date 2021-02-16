import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { currencyFormatter } from '../helpers/Formatters';
import { getList } from '../billingCycle/BillingCycleActions';

class DashboardList extends Component {

    componentWillMount() {
        this.props.getList();
    }

    sum(array = []) {
        return array.reduce((subTotal, atual) => subTotal + (+atual.value || 0), 0);
    }

    renderRows() {
        const list = this.props.list || [];
        
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{currencyFormatter(this.sum(bc.credits))}</td>
                <td>{currencyFormatter(this.sum(bc.debts))}</td>
                <td>
                    {currencyFormatter(this.sum(bc.credits) - this.sum(bc.debts))}
                </td>
            </tr>
        ));
    }

    render() {
        //console.log("Array de BCs: ", this.props.list);
        return (
            
            <div className="pad-div-table">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Créditos</th>
                            <th>Débitos</th>
                            <th className="table-actions">Consolidado</th>
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
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(DashboardList);