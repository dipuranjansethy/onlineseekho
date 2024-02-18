import { Button, Container, Heading, VStack,Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../../redux/actions/profile';
import toast from 'react-hot-toast';

const Reset = () => {
  const [password, setPassword] = useState();
  const { loading, message, error } = useSelector(state => state.profile);
  const params= useParams()
  // console.log(params.token)
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const submitHandler = e => {
    e.preventDefault();
    dispatch(resetPassword(params.token,password));
    navigate("/login")
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);
  
  return (
    <Container py={"16"} h={"96vh"}>
      <form onSubmit={submitHandler}>
        <Heading children="Reset Password" my="16" 
          textTransform={"uppercase"}
          textAlign={["center", "left"]}
        />
        <VStack spacing={"8"}>
          <Input 
            required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="enter new password"
              type="password"
              focusBorderColor="yellow.500"
          />
          <Button type='submit' colorScheme='yellow'>
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  )
}

export default Reset;