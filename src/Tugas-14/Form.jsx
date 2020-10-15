import React, { useContext } from 'react'
import { BuahContext } from './BuahContext'

const Form = () => {
    const { tambahAtauEditBuah, input, setInput, isLoading } = useContext(BuahContext)

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        tambahAtauEditBuah(input)
    }
    return (
        <div>
            <form className="tugas12-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="namaBuah">Nama Buah : </label>
                    <input id="namaBuah" tyspe="text" placeholder="Nama Buah" name="name" value={input.name} onChange={handleChange} required />
                    <label htmlFor="namaBuah">Harga : </label>
                    <input id="harga" type="text" placeholder="Harga" name="price" value={input.price} onChange={handleChange} required />
                    <label htmlFor="namaBuah">Berat : </label>
                    <input id="berat" type="text" placeholder="Berat" name="weight" value={input.weight} onChange={handleChange} required />
                </div>
                <button type="submit" >{isLoading ? ('Loading bozz') : ('Simpan')}</button>
            </form>

        </div>
    )
}

export default Form
