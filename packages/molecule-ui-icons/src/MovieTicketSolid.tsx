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

const MovieTicketSolid: React.FC<Props> = ({ fill, size = 'normal', customSize, className }) => {

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
            <path fill={fill}  fillRule="evenodd" d="M4.5 9a.5.5 0 00-.5.5V11a1 1 0 110 2v1.5a.5.5 0 00.5.5h15a.5.5 0 00.5-.5V13a1 1 0 110-2V9.5a.5.5 0 00-.5-.5h-15zm7.5 2.2a.5.5 0 100-1 .5.5 0 000 1zm2-.5a.5.5 0 11-1 0 .5.5 0 011 0zm-3.5.5a.5.5 0 100-1 .5.5 0 000 1zm2 .8a.5.5 0 11-1 0 .5.5 0 011 0zm1 .5a.5.5 0 100-1 .5.5 0 000 1zM11 12a.5.5 0 11-1 0 .5.5 0 011 0zm1 1.8a.5.5 0 100-1 .5.5 0 000 1zm2-.5a.5.5 0 11-1 0 .5.5 0 011 0zm-3.5.5a.5.5 0 100-1 .5.5 0 000 1z" clipRule="evenodd"/>
        </svg>
    );
};

export default MovieTicketSolid;