import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSummary } from './DashboardActions';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widgets/valueBox';
import { currencyFormatter } from '../helpers/Formatters'; 
import DashboardList from './DashboardList';
import Row from '../common/layout/row';

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary();
    }

    render() {
        const { allDebts, allCredits } = this.props.summary;
        return (
            <div>
                <ContentHeader title="Dashboard" subtitle="v1.0" />
                <Content>
                    <div className="box-body">
                        <fieldset>
                            <legend>Total</legend>
                            <Row>
                                <ValueBox cols="12 6 4 4" color="green" icon="bank"
                                    value={currencyFormatter(allCredits)} text="Total de Créditos" />
                                <ValueBox cols="12 6 4 4" color="red" icon="credit-card"
                                    value={currencyFormatter(allDebts)} text="Total de Débitos" />
                                <ValueBox cols="12 6 4 4" color="blue" icon="money"
                                    value={currencyFormatter(allCredits - allDebts)} text="Valor Consolidado" />
                            </Row>
                        </fieldset>
                        <br />
                        <fieldset>
                            <legend>Histórico</legend>
                            <Row>
                                <DashboardList />
                            </Row>
                        </fieldset>
                    </div>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary });
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);