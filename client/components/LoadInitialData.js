import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {me} from '../store'
import Main from './Main'

class LoadInitialData extends Component {
  constructor () {
    super()
    this.state = {
      loaded: false,
      error: false
    }
  }

  async componentDidMount () {
    try {
      await this.props.load()
      this.setState({loaded: true})
    } catch (error) {
      this.setState({error: true})
    }
  }

  render () {
    const {loaded, error} = this.state
    return loaded
      ? <Main />
      : error
        ? <div>We are experiencing some technical difficulties...</div>
        : <div>Loading...</div>
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
