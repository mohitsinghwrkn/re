import React from 'react'
import axios from 'axios';

const deleteEmployee = (id) => {
    axios.get('http://localhost:5555/dEmployee/' + id)
        .then(() => {
            console.log('Employee Deleted !!!')
        })
        .catch((error) => {
            console.log(error)
        })

    return (
        <div>deleteEmployee</div>
    )
}

export default deleteEmployee
