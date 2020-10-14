import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Tabel from './Tabel'

const Tugas13 = () => {
    const [listBuah, setlistBuah] = useState([])
    const [input, setInput] = useState({
        id: '',
        name: '',
        price: '',
        weight: ''
    })
    useEffect(() => {
        axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                setlistBuah(res.data)
            })
    }, [])
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(input.id)
        if (listBuah.some(buah => buah.id === input.id)) {
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`, input)
                .then(res => {
                    let edited = listBuah.map(buah => {
                        if (buah.id === res.data.id) {
                            buah.name = res.data.name
                            buah.price = res.data.price
                            buah.weight = res.data.weight
                        }
                        return buah
                    })
                    setlistBuah(edited)
                    setInput({
                        id: '',
                        name: '',
                        price: '',
                        weight: ''
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            axios.post('http://backendexample.sanbercloud.com/api/fruits', input)
                .then(res => {
                    setlistBuah([
                        ...listBuah,
                        res.data
                    ])
                    setInput({
                        name: '',
                        price: '',
                        weight: ''
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    const edit = (data) => {
        setInput({
            ...input,
            id: data.id,
            name: data.name,
            price: data.price,
            weight: data.weight
        })
    }
    const hapus = (id) => {
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
            .then(res => {
                console.log(res.data)
                setlistBuah(listBuah.filter(buah => buah.id !== id))
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="tugas13-container">
            <form className="tugas12-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="namaBuah">Nama Buah : </label>
                    <input id="namaBuah" tyspe="text" placeholder="Nama Buah" name="name" value={input.name} onChange={handleChange} required />
                    <label htmlFor="namaBuah">Harga : </label>
                    <input id="harga" type="text" placeholder="Harga" name="price" value={input.price} onChange={handleChange} required />
                    <label htmlFor="namaBuah">Berat : </label>
                    <input id="berat" type="text" placeholder="Berat" name="weight" value={input.weight} onChange={handleChange} required />
                </div>
                <button type="submit" >Simpan</button>
            </form>
            <hr />
            <Tabel listBuah={listBuah} edit={edit} hapus={hapus} />
        </div>

    )
}

export default Tugas13
