import React from 'react'

const Tabel = ({ listBuah, edit, hapus }) => {
    const dataEdit = (data) => {
        edit(data)
    }
    const dataDelete = (id) => {
        hapus(id)
    }
    return (
        <div>
            <h1>Tabel Harga Buah</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th align="center">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {listBuah !== [] && listBuah.map((buah) => (
                        <tr key={buah.id}>
                            <td>{buah.name}</td>
                            <td>Rp. {buah.price}</td>
                            <td>{buah.weight} gram</td>
                            <td align="center">
                                <button onClick={() => dataEdit(buah)}>Edit</button>
                                <button onClick={() => dataDelete(buah.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Tabel
