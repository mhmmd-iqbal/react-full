import React, { Component } from 'react';

class LifeCirleComp extends Component{
    // cara dekalarasi state menggunakan constructor
    constructor(props){ // wajib
        super(props)    // wajib
        this.state = {
            count : 1
        }
        console.log('constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null
    }
    
    componentDidMount(){
        console.log('componentDidMount')
        // bisa update state props 
        setTimeout(() => {
            this.setState({
                count: 2
            })
        }, 2000)
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.group('shouldComponentUpdate')
        console.log('nextProp:', nextProps)
        console.log('nextState:', nextState)
        console.groupEnd()
        if(nextState.count > 4){
            return false
        }
        // retur true jika ingin engupdate di did component update
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return true
    }
    
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')
    }
    
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        console.log('render')
        return (
            <button onClick={this.changeCount}>Component Button {this.state.count} </button>
        )
    }
}

export default LifeCirleComp