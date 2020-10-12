import React, { Component } from 'react'
import './Tugas11.css'

export default class Tugas11 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 100,
            time: new Date().toLocaleTimeString(),
            show: true
        }
    }
    componentDidMount() {
        if (this.props.start !== undefined) {
            this.setState({ count: this.props.start })
        }
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count === 0) {
            this.setState({ show: false })
        }
    }

    tick() {
        this.setState({
            count: this.state.count - 1,
            time: new Date().toLocaleTimeString()
        });
    }
    render() {
        return this.state.show && (<Content time={this.state.time} count={this.state.count} timerID={this.timerID} />)
    }
}

class Content extends Component {

    componentWillUnmount() {
        console.log('ngilang')
        clearInterval(this.props.timerID);
    }
    render() {
        return (
            <div className="tugas11-container">
                <h1>Sekarang Jam : {this.props.time}</h1>
                <h1>Hitung Mundur : {this.props.count}</h1>
            </div>
        )
    }
}