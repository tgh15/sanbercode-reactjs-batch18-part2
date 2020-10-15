import React, { useContext } from 'react'
import { BuahContext } from './BuahContext'

const Table = () => {
    const { listBuah, hapusBuah, setInput } = useContext(BuahContext)
    return (
        <div>
            <h1>Tabel Harga Buah</h1>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th align="center">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {listBuah !== [] && listBuah.map((buah, index) => (
                        <tr key={buah.id}>
                            <td>{index + 1}</td>
                            <td>{buah.name}</td>
                            <td>Rp. {buah.price}</td>
                            <td>{buah.weight} gram</td>
                            <td align="center">
                                <button onClick={() => setInput(buah)}>Edit</button>
                                <button onClick={() => hapusBuah(buah.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
