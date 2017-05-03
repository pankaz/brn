import React from 'react';import PropTypes from 'prop-types';
import Label from './Label';
import ValidationError from './ValidationError';
import {getTextfieldContainerClasses} from './FieldContainer';

class ShortText extends React.Component {
    render () {
        let {
            hNode: { 
                id, 
                title, 
                readOnly=false, 
                placeholder, 
                required=false, 
                minLength=0, 
                maxLength=256,
                propertyName,
                pattern
            },
            elementErrors,
            value,
            submitting,
            onchange,
            onblur
        } = this.props;
        let classNames = getTextfieldContainerClasses(this.props);

        return (
            <div className={classNames}>
                <Label for={id} label={title} placeholder={placeholder} title={title} 
                       required={required} />
                <div>
                    <input
                        aria-invalid={elementErrors.length>0}
                        className="mdl-textfield__input"
                        id={id}
                        maxLength={maxLength}
                        minLength={minLength}
                        name={propertyName}
                        pattern={pattern}
                        disabled={readOnly || submitting}
                        required={required}
                        type="text"
                        value={value}
                        onChange={onchange}
                        onBlur={onblur}
                    />
                </div>
                <ValidationError errors={elementErrors} />
            </div>
        );
    }
}

ShortText.propTypes = {
    hNode: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
    elementErrors: PropTypes.array,
    submitting: PropTypes.bool,
    onchange: PropTypes.func,
    onblur: PropTypes.func
};

export default ShortText;