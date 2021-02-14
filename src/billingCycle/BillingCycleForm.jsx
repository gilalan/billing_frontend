import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LabelAndInput from '../common/form/labelAndInput';
import Summary from './summary';
import ItemList from './itemList';
import { init } from './BillingCycleActions';

class BillingCycleForm extends Component {

    sum(array = []) {
        return array.reduce((subTotal, atual) => subTotal + (+atual.value || 0), 0);
    }

    // calculateSummary() {
    //     const sum = (subTotal, currentValue) => subTotal + currentValue;
    //     return {
    //         sumCredts: this.props.credits.reduce((subTotal, atual) => subTotal + (+atual.value || 0), 0),
    //         sumDebts: this.props.debts.reduce((subTotal, atual) => subTotal + (+atual.value || 0), 0)
    //     }
    // }

    render() {
        //console.log('Renderizando formulário...');
        const { handleSubmit, readOnly, credits, debts } = this.props; //vem do Decorator do ReduxForm no nosso componente
        const sumCredits = this.sum(this.props.credits);
        const sumDebts = this.sum(this.props.debts);
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LabelAndInput} label="Nome"
                        cols="12 4" placeholder="Informe o nome" readOnly={readOnly} />
                    <Field name="month" component={LabelAndInput} label="Mês"
                        cols="12 4" placeholder="Informe o mês" type="number" readOnly={readOnly} />
                    <Field name="year" component={LabelAndInput} label="Ano"
                        cols="12 4" placeholder="Informe o ano" type="number" readOnly={readOnly} />
                    <Summary creditsSum={sumCredits} debtsSum={sumDebts} />
                    <ItemList cols='12 6' list={credits} readOnly={readOnly} field='credits' legend="Créditos" />
                    <ItemList cols='12 6' list={debts} readOnly={readOnly} field='debts' legend="Débitos" showStatus={true} />
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`} >
                        {this.props.submitLabel}
                    </button>
                    <button type="button" className="btn btn-default"
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);
const selector = formValueSelector('billingCycleForm');

const mapStateToProps = state => ({credits: selector(state, 'credits'), debts: selector(state, 'debts')});
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);