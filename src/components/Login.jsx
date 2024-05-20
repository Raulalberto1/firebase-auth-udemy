import React, {useState} from 'react'
import { auth } from '../firebaseconfig'
import {useHistory} from'react-router-dom'

export const Login = () => {
  const historial = useHistory()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [msgError, setMsgError] = useState(null)

  const RegistrarUsuario = (e) => {
    e.preventDefault()
    setMsgError(null)
    auth.createUserWithEmailAndPassword(email, pass)
      .then( r => {
        historial.push('/')
      })
      .catch(error => {
        if(error.code==='auth/invalid-email'){
          setMsgError('Formato Email incorrecto')
        }
        if(error.code==='auth/weak-password'){
          setMsgError('La password debe tener 6 carácteres o más')
        }
      })
  }

  const LoginUsuario = () => {
    setMsgError(null)
    auth.signInWithEmailAndPassword(email, pass)
    .then( (r) => {
      historial.push('/')
    })
    .catch( (error) => {
      if(error.code==='auth/internal-error'){
        setMsgError(error.message)
      }
    })
  }

  return (
    <div className='row mt-5'>
        <div className='col'>

        </div>
        <div className='col'>
          <form 
            className='form-group'
            onSubmit={RegistrarUsuario}
          >
            <input 
              type="email"
              placeholder='Introduce email'
              className='form-control'
              onChange={(e) => {setEmail(e.target.value)}}
            />
            <input 
              type="password"
              placeholder='Introduce Password'
              className='form-control mt-4'
              onChange={(e) => {setPass(e.target.value)}}
            />
            <input 
              type="submit" 
              value="Registrar usuario"
              className='btn btn-dark btn-block mt-4'
            />
          </form>
          <button
            className='btn btn-success btn-block'
            onClick={LoginUsuario}
          >
            Iniciar Sesión
          </button>
          {
            msgError ? 
            (
              <div>
                {msgError}
              </div>
            )
            :
            (<span />)
          }
        </div>
        <div className='col'>
          
        </div>
    </div>
  )
}
