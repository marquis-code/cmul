import React from 'react';

export const showErrorMessage = (errorMsg) => {
    return (
        <div>
            {errorMsg}
        </div>
    )
}

export const showSuccessMessage = (successMsg) => {
    return (
        <div>
            {successMsg}
        </div>
    )
}