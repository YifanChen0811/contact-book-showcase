import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Col from "../components/Col";
import Row from "../components/Row";

import { doc, getDoc } from 'firebase/firestore'
import db from "../db";

function Contact () {
  const params = useParams()
  const navigate = useNavigate()
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  useEffect(() => {
    // getting document from firestore
    // return a promise
    getDoc(doc(db, 'contacts', params.id))
      .then(document => {
        setContact({
          firstName: document.data().firstName,
          lastName: document.data().lastName,
          email: document.data().email
        })
      })
  }, [])

  return (
    <>
      <Row>
        <Col><Link to="/" className="display-7">Back</Link></Col>
        <Col className="text-end"><Link to={"/edit/" + params.id} className="display-7">Edit</Link></Col>
      </Row>
      <Row className="border my-5">
        <Col>
          <h2 className="mb-3 my-3">{contact.firstName + ' ' + contact.lastName}</h2>
          <hr />
          <p>Email<br />
            <span className="text-primary">{contact.email}</span></p>
        </Col>
      </Row>
    </>
  )
}

export default Contact