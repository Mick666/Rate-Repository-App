import React from 'react';
import Text from './Text';

const Subheading = ({ color, fontWeight, style, ...props }) => {
    return <Text 
    color={color} 
    fontWeight={fontWeight} 
    style={style} 
    fontSize='subheading' 
    {...props} 
    />;
};

export default Subheading;