import React, { Component } from 'react'



class Tabel extends Component {
    constructor(props) {
        super(props)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleEdit(props) {
        this.props.dataEdit(props)
    }
    handleDelete(props) {
        this.props.dataDelete(props)
    }
    render() {
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
                        {this.props.buah.map((buah, index) => (
                            <tr key={index}>
                                <td>{buah.nama}</td>
                                <td>Rp. {buah.harga}</td>
                                <td>{buah.berat} gram</td>
                                <td align="center">
                                    <button onClick={() => this.handleEdit(buah)}>Edit</button>
                                    <button onClick={() => this.handleDelete(buah.id)}>Delete</button>
                                </td>
                            </tr>
                            // <Rows key={index} nama={buah.nama} harga={buah.harga} berat={buah.berat} />
                        ))}
                    </tbody>
                </table>
            </div >
        )
    }
}

export default Tabel

// function Rows({ nama, harga, berat }) {
//     return (
//         <tr>
//             <td>{nama}</td>
//             <td>Rp. {harga}</td>
//             <td>{berat}</td>
//             <td align="center">
//                 <button onClick={handleEdit}>Edit</button>
//                 <button>Delete</button>
//             </td>
//         </tr>
//     )
// }
