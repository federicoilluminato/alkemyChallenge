import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
    return (
        <div>
            <Spinner animation="border" role="status">
            <span className="sr-only"></span>
            </Spinner>
        </div>
    )
}

export default LoadingSpinner
