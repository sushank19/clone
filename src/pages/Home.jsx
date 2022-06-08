import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
    <Main/>
    <Row rowID='1' title='Trending' fetchURL={requests.requestTrending} />
    <Row rowID='2' title='TopRated' fetchURL={requests.requestTopRated} />
    <Row rowID='3' title='Upcoming' fetchURL={requests.requestUpcoming} />
    <Row rowID='4' title='Popular' fetchURL={requests.requestPopular} />
    <Row rowID='5' title='horror' fetchURL={requests.requestHorror} />
    </>
  )
}

export default Home