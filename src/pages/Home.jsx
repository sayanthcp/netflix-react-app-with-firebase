import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId='1' title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowId='2' title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row rowId='3' title='Trending' fetchURL={requests.requestTrending}/>
      <Row rowId='4' title='Horror' fetchURL={requests.requestHorror}/>
      <Row rowId='5' title='Upcoming' fetchURL={requests.requestUpcoming}/>
    </>
  )
}

export default Home
