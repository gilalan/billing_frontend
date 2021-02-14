import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';

import { showTabs, selectTab } from '../common/tab/tabActions';

import {
    API_BASE_URL,
    BILLING_CYCLE_LIST_FETCHED,
    BILLING_CYCLE_CREATE,
    SUCCESS_ARRAY_MSG
} from '../helpers/Consts'; //a desestruturação não funcionou com o export default

const INITIAL_VALUES = {credits: [{}], debts: [{}]};

export function getList() {
    console.log("Chamando GetList()");
    //Essa chamada é assíncrona, do jeito normal a action vai passar
    //e retornar um valor que ainda não foi definido
    //o middleware serve para aguardar essa Promise do axios
    const request = axios.get(`${API_BASE_URL}/billingCycles`);
    //console.log("Request 1: ", request.data);
    return {
        type: BILLING_CYCLE_LIST_FETCHED,
        payload: request
    }
}

export function create(values) {
    //console.log("Action BC::CREATE::", values);
    return _submit(values, 'post');       
}

export function update(values) {
    //console.log("Action BC::Update::", values);
    return _submit(values, 'put');
}

export function remove(values) {
    //console.log("Action BC::D E L E T E::", values);
    return _submit(values, 'delete');
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        //resetForm('billingCycleForm')
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}

//Função privada para auxiliar
function _submit(values, method) {
    //axios.post, axios.put, axios.delete
    return dispatch => {
        const id = values._id ? values._id : '';//não tem no create...
        axios[method](`${API_BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso');
                dispatch(init());
            })
            .catch(e => {
                //Convencionamos no backend que todos os erros virão num array
                e.response.data.errors.forEach(error => {
                    toastr.error('Erro', error);
                });
            });
    }
}