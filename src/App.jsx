import { Link, Outlet } from 'react-router-dom'
import Container from './components/Container'
import Row from './components/Row'
import Col from './components/Col'

function App () {
  return (
    <Container>
      <Row className="my-5 d-flex align-items-center">
        <Col>
          <h1 className="display-4">Contact Book</h1>
        </Col>
      </Row>
      <Outlet />
    </Container>
  )
}

export default App
