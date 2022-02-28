import React from 'react';
import { Spinner } from 'react-bootstrap';

export const Spinners = () => {
    return (
        <>
        <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
      />  
        </>
    )
}