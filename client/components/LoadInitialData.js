import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {me} from '../store'
import Main from './Main'

class LoadInitialData extends Component {
  constructor () {
    super()
    this.state = {
      loaded: false
    }
  }

  async componentDidMount () {
    await this.props.load()
    this.setState({loaded: true})
  }

  render () {
    const {loaded} = this.state
    return loaded ? <Main /> : <div>Loading...</div>
  }
}

const mapDispatch = (dispatch) => {
  return {
    load: async () => {
      await dispatch(me())
    }
  }
}

export default withRouter(connect(null, mapDispatch)(LoadInitialData))
