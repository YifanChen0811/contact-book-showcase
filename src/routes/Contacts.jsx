import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Col from "../components/Col";
import Row from "../components/Row";
import Card from "../components/Card"

import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import db from "../db";

function Contacts () {
  const [contacts, setContacts] = useState([])
  // array for search
  const [array, setArray] = useState([])
  // search result
  const [result, setResult] = useState('')

  useEffect(() => {
    // create a collection
    const c = collection(db, 'contacts')
    // create query
    const q = query(c, orderBy('lastName'))

    // get snapshot
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = []
      snapshot.forEach(doc => data.push({
        id: doc.id,
        firstName: doc.data().firstName,
        lastName: doc.data().lastName,
        email: doc.data().email
      }))
      setContacts(data)
      setArray(data)
    })
  }, [])

  // search function
  function changeHandler (e) {
    setResult(e.target.value)
  }
  useEffect(() => {
    setArray(
      contacts.filter(contact => contact.firstName.toUpperCase().includes(result.toUpperCase()) || contact.lastName.toUpperCase().includes(result.toUpperCase()))
      //  console.log(result)
      //  console.log(contacts)
    )
  }, [result])

  return (
    <>
      <Row>
        <Col>
          <input className="mb-3" type="text" placeholder="Search" value={result} onChange={changeHandler} />
        </Col>
        {array.map(contact => (
          <Col key={contact.id} className="col-12 mb-3">
            <Link className="text-decoration-none text-body" to={"/contact/" + contact.id}>
              <Card title={contact.firstName + ' ' + contact.lastName} />
            </Link>
          </Col>)
        )}
      </Row>
      <Row>
        <Col className="d-flex justify-content-start">
          <Link className="btn btn-secondary" to="/new">{'\u002B'}</Link>
        </Col>
      </Row>
    </>
  )
}

export default Contacts