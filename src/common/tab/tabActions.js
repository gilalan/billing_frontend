import { TAB_SELECTED, TAB_SHOWED } from '../../helpers/Consts';


export function selectTab(tabId) {
    return {
        type: TAB_SELECTED,
        payload: tabId
    }    
}

export function showTabs(...param) {
    const tabKeyValue = {};
    param.forEach(e => tabKeyValue[e] = true);
    return {
        type: TAB_SHOWED,
        payload: tabKeyValue
    }
}