import React, {useEffect} from 'react'

import ModalPopUp from './Components/ModalPopUp'

import { checkIfLoggedIn } from '../../assets/helpers/authAndReroute'

const Login = () => {

  useEffect(()=> {
    checkIfLoggedIn();
  });

  
  return (
    <div>
      <ModalPopUp/>
    </div>
  )
}

export default Login