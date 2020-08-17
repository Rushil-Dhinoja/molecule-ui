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

const BackwardTen: React.FC<Props> = ({ fill, size = 'normal', customSize, className }) => {

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
            <path fill={fill}  fillRule="evenodd" d="M12.5 5v1.577A6.5 6.5 0 115.02 13.5a.471.471 0 01.48-.5c.276 0 .498.224.523.5A5.5 5.5 0 1012.5 7.591V9l-3-2 3-2zm1.17 10.366c.22-.422.33-1.068.33-1.937v-.962c-.006-.84-.12-1.46-.34-1.861-.22-.404-.563-.606-1.03-.606-.47 0-.816.209-1.036.626-.22.417-.33 1.055-.33 1.913v.99c.007.821.123 1.439.345 1.853.222.412.565.618 1.027.618.469 0 .813-.211 1.034-.634zm-.417-4.323c.13.286.196.743.196 1.371v1.216c-.006.61-.075 1.056-.208 1.34-.131.283-.333.424-.605.424-.276 0-.482-.15-.62-.449-.134-.302-.202-.768-.202-1.4v-1.187c.004-.593.07-1.033.2-1.32.129-.285.334-.428.616-.428.284 0 .492.144.623.433zM10.11 16h.554v-5.868h-.087L9 10.931v.673l1.11-.55V16z" clipRule="evenodd"/>
        </svg>
    );
};

export default BackwardTen;