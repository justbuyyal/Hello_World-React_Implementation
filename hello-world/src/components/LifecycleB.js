import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Faker'
        }

        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifestyleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifestyleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifestyleB componentDidUpdate')
    }
    
    render() {
        console.log('LifecycleB render')
        return <div>Lifecycel B</div>
    }
}

export default LifecycleB
