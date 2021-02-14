import React from 'react';

import Grid from '../common/layout/grid';
import Row from '../common/layout/row';
import ValueBox from '../common/widgets/valueBox';
import { currencyFormatter } from '../helpers/Formatters';

export default ({creditsSum, debtsSum}) => (

    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' value={currencyFormatter(creditsSum)} text="Total de Créditos" color="green" icon="bank" />
                <ValueBox cols='12 4' value={currencyFormatter(debtsSum)} text="Total de Débitos" color="red" icon="credit-card" />
                <ValueBox cols='12 4' value={currencyFormatter(creditsSum - debtsSum)} text="Consolidado" color="blue" icon="money" />
            </Row>
        </fieldset>
    </Grid>

)

