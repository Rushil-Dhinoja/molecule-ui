import * as React from 'react';
import cx from 'classnames';
import { throwPropError } from './helpers';
import '../styles/index.css';


type Props = {
    fill?: string;
    size: 'small' | 'normal' | 'large' | 'huge';
    customSize?: string;
    className?: string;
};

const CloseFill: React.FC<Props> = ({ fill, size = 'normal', customSize, className }) => {

    const sizeValues = ['small', 'normal', 'large', 'huge'];

    if (size && typeof size !== 'string') {
        throwPropError(
            'Value of props.size must be a string.'
        );
    }
    
    if (!size) throwPropError("Value of props.size can't be an empty string ");

    if (size) {
        if (sizeValues.indexOf(size) === -1)
            throwPropError(
                'Value of props.size must be any one of  "huge"  "large"  "normal"  "small". '
            );
    }

    if (fill && typeof fill !== 'string') {
        throwPropError('Value of props.fill must be a string');
    }

    if (fill && typeof fill === 'string') {
        if (!fill.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
            throwPropError('Value of props.fill must be a valid "HEXCODE".');
        }
    }

    if (customSize && typeof customSize !== 'string') {
        throwPropError('Value of props.customSize must be a string');
    }

    if (className && typeof className !== 'string') {
        throwPropError('Value of props.className must be a string');
    }

    let customStyles = {};

    if (customSize) {
        customStyles = {
            width: customSize,
            height: customSize,
        };
    }

    if (customSize && window.innerWidth < 600) {
        customStyles = {
            width: +customSize / 2,
            height: +customSize / 2,
        };
    }

    const classes = cx(size, className);
    return (
        <svg
            className={classes}
            style={customStyles}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <path fill={fill}  fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm3.182-14.243a.75.75 0 111.06 1.061L13.062 12l3.182 3.182a.75.75 0 11-1.061 1.06L12 13.062l-3.182 3.182a.75.75 0 01-1.06-1.061L10.938 12 7.757 8.818a.75.75 0 011.061-1.06L12 10.938l3.182-3.182z" clipRule="evenodd"/>
        </svg>
    );
};

export default CloseFill;