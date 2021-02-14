import React, { Component } from 'react';
import { Field, arrayInsert, arrayRemove } from 'redux-form';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Input from '../common/form/input';
import Select from '../common/form/select';
import Grid from '../common/layout/grid';
import If from '../common/operator/If';

class ItemList extends Component {

    add(index, item = {}) {
        if (!this.props.readOnly) {

            this.props.arrayInsert('billingCycleForm', this.props.field, index, item);
        }
    }

    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {

            this.props.arrayRemove('billingCycleForm', this.props.field, index);
        }
    }

    renderRows() {
        const list = this.props.list || [];
        return (
            list.map((item, index) => (
                <tr key={index}>
                    <td><Field name={`${this.props.field}[${index}].name`} component={Input}
                        readOnly={this.props.readOnly} placeholder="Informe o nome" /></td>
                    <td><Field name={`${this.props.field}[${index}].value`} component={Input}
                        readOnly={this.props.readOnly} placeholder="Informe o valor" /></td>
                    <If test={this.props.showStatus}>
                        <td>
                            <Field name={`${this.props.field}[${index}].status`} component={Select}
                            readOnly={this.props.readOnly} >
                                <option value="PAGO">Pago</option>
                                <option value="PENDENTE">Pendente</option>
                                <option value="AGENDADO">Agendado</option>                    
                            </Field>
                        </td>
                    </If>
                    <td>
                        <div className="btn-group">
                            <button type="button" className="btn btn-success"
                                onClick={() => this.add(index + 1)}>
                                <i className="fa fa-plus" />
                            </button>
                            <button type="button" className="btn btn-warning"
                                onClick={() => this.add(index + 1, item)}>
                                <i className="fa fa-pencil" />
                            </button>
                            <button type="button" className="btn btn-danger"
                                onClick={() => this.remove(index)}>
                                <i className="fa fa-trash-o" />
                            </button>
                        </div>
                    </td>
                </tr>)
            )
        )
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th className="table-numeric-values">Valor</th>
                                <If test={this.props.showStatus}>
                                    <th className="table-status">Status</th>
                                </If>
                                <th className="table-actions">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch);
export default connect(null, mapDispatchToProps)(ItemList);