import React from 'react'
import { initStore } from '../statemanagement/store'
import withRedux from 'next-redux-wrapper'

import Layout from '../components/shared/Layout';
import Game from '../components/game/GamePage'; 

class GamePage extends React.Component {
  static getInitialProps ({ store, pathname, query, asPath }) {
    // console.log('getInitialProps');
  }

  render () {
    return (
      <Layout>
        <GamePage />
      </Layout>
    )
  }
}

export default withRedux(initStore)(Game)
