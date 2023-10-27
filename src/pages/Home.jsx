import requests from '../Requests'
import Main from '../components/Main'

import React from 'react'
import Row from '../components/Row'

const Home = () => {
  return (
    <>
        <Main/>
        <Row rowId='1' title='Trending' fetchURL={requests.requestTrending}/>
        <Row rowId='2' title='Horrer' fetchURL={requests.requestHorror}/>
        <Row rowId='3' title='UpComing' fetchURL={requests.requestUpcoming}/>
        <Row rowId='4' title='Top Rated' fetchURL={requests.requestTopRated}/>
        <Row rowId='5' title='Popular' fetchURL={requests.requestPopular}/>

      
    </>
  )
}

export default Home
