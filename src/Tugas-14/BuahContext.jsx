import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const BuahContext = createContext()

export const BuahProvider = (props) => {
    const [listBuah, setListBuah] = useState([])
    const [input, setInput] = useState({
        name: '',
        price: '',
        weight: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                setListBuah(res.data)
            })
    }, [])

    const tambahAtauEditBuah = (data) => {
        if (listBuah.some(buah => buah.id === input.id)) {
            setIsLoading(true)
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
                    setListBuah(edited)
                    setInput({
                        name: '',
                        price: '',
                        weight: ''
                    })
                    setIsLoading(false)
                })
                .catch(err => {
                    setIsLoading(false)
                    console.log(err)
                })
        } else {
            setIsLoading(true)
            axios.post('http://backendexample.sanbercloud.com/api/fruits', data)
                .then(res => {
                    setInput({
                        name: '',
                        price: '',
                        weight: ''
                    })
                    setListBuah([
                        ...listBuah,
                        res.data
                    ])
                    setIsLoading(false)
                })
                .catch(err => {
                    setIsLoading(false)
                    console.log(err)
                })
        }
    }

    const hapusBuah = (id) => {
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
            .then(res => {
                console.log(res.data)
                setListBuah(listBuah.filter(buah => buah.id !== id))
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <BuahContext.Provider value={{ listBuah, tambahAtauEditBuah, hapusBuah, input, setInput, isLoading }}>
            {props.children}
        </BuahContext.Provider>
    )
}
