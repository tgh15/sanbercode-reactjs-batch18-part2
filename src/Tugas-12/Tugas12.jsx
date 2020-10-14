import React, { Component } from 'react';
import Tabel from './Tabel'
import './Tugas12.css'

export default class Tugas12 extends Component {
    constructor() {
        super()
        this.state = {
            listBuah: [
                { id: 1, nama: "Semangka", harga: 10000, berat: 1000 },
                { id: 2, nama: "Anggur", harga: 40000, berat: 500 },
                { id: 3, nama: "Strawberry", harga: 30000, berat: 400 },
                { id: 4, nama: "Jeruk", harga: 30000, berat: 1000 },
                { id: 5, nama: "Mangga", harga: 30000, berat: 500 }
            ],
            id: Date.now(),
            nama: '',
            harga: '',
            berat: ''
        }
        this.dataEdit = this.dataEdit.bind(this)
        this.dataDelete = this.dataDelete.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    dataEdit(props) {
        this.setState(
            {
                ...this.state,
                id: props.id,
                nama: props.nama,
                harga: props.harga,
                berat: props.berat,
            })
    }

    dataDelete(props) {
        this.setState({
            ...this.state,
            listBuah: this.state.listBuah.filter(buah => buah.id !== props)
        })
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        if (this.state.listBuah.some(buah => buah.id === this.state.id)) {
            let edited = this.state.listBuah.map(buah => {
                if (buah.id === this.state.id) {
                    buah.nama = this.state.nama
                    buah.harga = this.state.harga
                    buah.berat = this.state.berat
                }
                return buah
            })
            this.setState({
                listBuah: edited,
                id: Date.now(),
                nama: '',
                harga: '',
                berat: ''
            })
        } else {
            this.setState({
                listBuah: [
                    ...this.state.listBuah,
                    {
                        id: this.state.id,
                        nama: this.state.nama,
                        harga: this.state.harga,
                        berat: this.state.berat,
                    }
                ],
                id: Date.now(),
                nama: '',
                harga: '',
                berat: ''
            })
        }
    }

    render() {
        return (
            <div className="tugas12-container">
                <form className="tugas12-form" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="namaBuah">Nama Buah : </label>
                        <input id="namaBuah" type="text" placeholder="Nama Buah" name="nama" value={this.state.nama} onChange={this.handleChange} />
                        <label htmlFor="namaBuah">Harga : </label>
                        <input id="harga" type="text" placeholder="Harga" name="harga" value={this.state.harga} onChange={this.handleChange} />
                        <label htmlFor="namaBuah">Berat : </label>
                        <input id="berat" type="text" placeholder="Berat" name="berat" value={this.state.berat} onChange={this.handleChange} />
                    </div>
                    <button type="submit" >Simpan</button>
                </form>
                <hr />
                <Tabel buah={this.state.listBuah} dataEdit={this.dataEdit} dataDelete={this.dataDelete} />
            </div>
        );
    }
}
