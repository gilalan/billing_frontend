import React from 'react';
import If from '../operator/If';

export default props => (
    <If test={!props.hide}>
        <div className="form-group has-feedback">
            <input {...props.input}
                className="form-control"
                type={props.type}
                readOnly={props.readOnly}
                placeholder={props.placeholder} />
            <span className={`glyphicon glyphicon-${props.icon} 
                form-control-feedback`}>                
            </span>
        </div>
    </If>
)