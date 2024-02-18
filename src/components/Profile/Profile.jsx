import {
  Avatar,
  Button,
  Text,
  Container,
  HStack,
  Heading,
  Stack,
  VStack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../Auth/Register';
import { removeFromPlaylist, updateProfilePicture } from '../../redux/actions/profile';
import { useDispatch, useSelector } from 'react-redux';
import { cancelSubscription, loadUser } from '../../redux/actions/user';
import toast, { Toaster } from 'react-hot-toast';


const Profile = ({ user }) => {
  const { loading, message, error } = useSelector(state => state.profile);
  const { loading:subscriptionLoading, message:subscriptionMessage, error:subscriptionError } = useSelector(state => state.subscription);

  const { isOpen, onClose, onOpen } = useDisclosure();
  const [imagePrev, setImagePrev] = useState();
  const [image, setImage] = useState();
  const dispatch = useDispatch();
  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const removeFromPlayListHandeler = async id => {
    await dispatch(removeFromPlaylist(id));
    dispatch(loadUser());
  };

  const cancelSubscriptionHandler=()=>{
    dispatch(cancelSubscription())
  }
  // const changeImageHandeler = async (e, image) => {
  //   e.preventDefault();
  //   const myForm = new FormData();
  //   myForm.append('file', image);
  //   console.log(myForm)
  //    dispatch(updateProfilePicture(myForm));
  //   dispatch(loadUser());
  // };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    if (subscriptionError) {
      toast.error(subscriptionError);
      dispatch({ type: 'clearError' });
    }
    if (subscriptionMessage) {
      toast.success(subscriptionMessage);
      dispatch({ type: 'clearMessage' });
      dispatch(loadUser());
    }
      toast.success(subscriptionMessage);
    }, [dispatch, error, message,subscriptionError,subscriptionMessage]);
  return (
    <Container minH={'95vh'} maxW={'container.lg'}>
      <Heading children={'Profile'} m={'8'} textTransform={'uppercase'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'} src={user.avatar.url} />
          <Button onClick={onOpen} colorScheme={'yellow'} variant="ghost">
            Change Photo
          </Button>
        </VStack>

        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'}></Text>
            <Text children={user.name}></Text>
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={'bold'}></Text>
            <Text children={user.email}></Text>
          </HStack>
          <HStack>
            <Text children="Since" fontWeight={'bold'}></Text>
            <Text children={user.createdAt.split('T')[0]}></Text>
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'} />
              {user.subscription && user.subscription.status === 'active' ? (
                <Button
                  isLoading={subscriptionLoading}
                  onClick={cancelSubscriptionHandler}
                  color={'yellow.500'}
                  variant="unstyled"
                >
                  Cancel Subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme={'yellow'}>Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to="updateprofile">
              <Button>Update Profile</Button>
            </Link>
            <Link to="/changepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading children={'Playlist'} size={'md'} my={'8'} />
      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          p={'4'}
        >
          {user.playlist.map((element, index) => (
            <VStack w="48" m={'2'} key={element.course}>
              <Image
                boxSize={'full'}
                objectFit={'contain'}
                src={element.poster}
              />
              <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button variant={'ghost'} colorScheme="yellow">
                    Watch Now
                  </Button>
                </Link>
                <Button
                  isLoading={loading}
                  onClick={() => removeFromPlayListHandeler(element.course)}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
      <ChangePhotoBox
        isOpen={isOpen}
        onClose={onClose}
        // changeImageHandeler={changeImageHandeler}
      />
    </Container>
  );
};

export default Profile;

function ChangePhotoBox({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const [imagePrev, setImagePrev] = useState();
  const [image, setImage] = useState();
  const changeImageHandeler = async (e, image) => {
    e.preventDefault();
    const myForm = new FormData();
    
    myForm.append('file', image);
    
     dispatch(updateProfilePicture(myForm));
    dispatch(loadUser());
  };
  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  const closeHandler = () => {
    onClose();
    setImagePrev('');
    setImage('');
  };
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur 10px'} />
      <ModalContent>
        <ModalBody>
          <Container>
            <form onSubmit={e => changeImageHandeler(e, image)}>
              <VStack spacing={'8'}>
                {imagePrev && <Avatar src={imagePrev} boxSize={'48'} />}

                <Input
                  type="file"
                  css={{ '&::file-selector-button': fileUploadCss }}
                  onChange={changeImage}
                />

                <Button w={'full'} colorScheme={'yellow'} type="submit">
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>

        <ModalFooter>
          <Button mr={'3'} onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
}
