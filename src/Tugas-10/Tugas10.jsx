import React from 'react'
import './Tugas10.css'

let dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 }
]

const Tugas10 = () => {
    return (
        <div className="tugas10_container">
            <h1>Tabel Harga Buah</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                    </tr>
                </thead>
                <tbody>
                    {dataHargaBuah.map((buah, index) => (
                        <Rows key={index} nama={buah.nama} harga={buah.harga} berat={buah.berat} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Tugas10

function Rows({ nama, harga, berat }) {
    return (
        <tr>
            <td>{nama}</td>
            <td>{harga}</td>
            <td>{berat / 1000} kg</td>
        </tr>
    )
}