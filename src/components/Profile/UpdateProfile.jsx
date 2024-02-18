import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateprofile } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = ({user}) => {

  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
 
  const submitHandler =async (e) => {
    e.preventDefault();
    await dispatch(updateprofile(name,email));
    dispatch(loadUser());
    navigate("/profile")
  };
  const { loading, message, error } = useSelector(state => state.profile);

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
    <Container py={'16'} minH={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          children="Update Profile"
          my={'16'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="name"
            type="text"
            focusBorderColor="yellow.500"
          />
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="dipu@mail.com"
            type="email"
            focusBorderColor="yellow.500"
          />

          <Button isLoading={loading} w={'full'} colorScheme="yellow" type="submit">
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
