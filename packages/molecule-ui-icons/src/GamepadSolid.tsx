import * as React from 'react';
import cx from 'classnames';
import { throwPropError } from './helpers';
import '@molecule-ui/styles/build/icons.css';

type Props = {
    fill?: string;
    size: 'small' | 'normal' | 'large' | 'huge';
    customSize?: string;
    className?: string;
};

const GamepadSolid: React.FC<Props> = ({ fill, size = 'normal', customSize, className }) => {

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


    const classes = cx(size, className);
    return (
        <svg
            className={classes}
            style={customSize ? { width: customSize, height: customSize }: {}}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <path fill={fill}  fillRule="evenodd" d="M10 5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3.293a.5.5 0 01-.146.353l-1.5 1.5a.5.5 0 01-.708 0l-1.5-1.5A.5.5 0 0110 8.793V5.5zm4 13a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3.292a.5.5 0 01.146-.354l1.5-1.5a.5.5 0 01.707 0l1.5 1.499a.5.5 0 01.147.354v3.292zm4.5-8.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3.292a.5.5 0 01-.354-.146l-1.5-1.5a.5.5 0 010-.707l1.5-1.5a.5.5 0 01.354-.146h3.293zm-13 0a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3.293a.5.5 0 00.353-.146l1.5-1.5a.5.5 0 000-.708l-1.5-1.5A.5.5 0 008.793 10H5.5z" clipRule="evenodd"/>
        </svg>
    );
};

export default GamepadSolid;