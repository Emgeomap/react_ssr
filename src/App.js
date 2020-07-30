import React, { useEffect } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from './Redux/Action';

import { Container, Row, Col, ListGroup, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


const Loading = () => (
  <div className='text-center'>
    <img src='https://i.gifer.com/YCZH.gif' alt='' />
  </div>
)
const Error = (props) => (
  <div className='text-center'>
    <h5 className='text-danger'>{props.text}</h5>
  </div>
)
const tableBody = (listOfAlbum) => {
  return (listOfAlbum.map((d, i) => {
    return (
      <tr key={i}>
        <td>{d.title}</td>
        <td>{d.artist}</td>
        <td><img src={d.image} style={{ maxHeight: '100px' }} /></td>
        <td><NavLink href={d.url} target='_blank'>Buy</NavLink></td>
      </tr>
    );
  }))
}
const App = () => {
  const app = useSelector(state => state.album);
  const dispatch = useDispatch();
  const UserList = () => (
    <div className="App" >
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Image</th>
            <th>Order</th>
          </tr>
        </thead>
        <tbody>
          {tableBody(app.listOfAlbum)}
        </tbody>
      </table>
    </div>
  );
  useEffect(() => {
    dispatch(getAlbums());
  }, []);
  return (
    <Container>
      <Row className='mt-5'>
        <Col md={8} className='mx-auto'>
          {app.fetching ? <Loading /> : app.fetchIsError ? <Error text={app.errorMessage} /> : <UserList />}
        </Col>
      </Row>
    </Container>
  )
}
export default App;
