import React from 'react'
import Form from './Form'
import Table from './Table'

import { BuahProvider } from './BuahContext'

const Tugas14 = () => {
    return (
        <BuahProvider>
            <div className="tugas14-container">
                <Form />
                <hr />
                <Table />
            </div>
        </BuahProvider>
    )
}

export default Tugas14
