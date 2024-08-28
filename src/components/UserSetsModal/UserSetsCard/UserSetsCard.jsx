import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Resizer from 'react-image-file-resizer';

import { selectUser } from '../../../redux/User/userSlice';
import {
  changeUserAvatar,
  deleteUserAvatar,
} from '../../../redux/User/operations';
import Loader from '../../../components/Loader/Loader';
import { useIsLoading } from '../../../hooks/useIsLoading';
import { takeFirstLetter, takeID } from '../../../helpers';

import {
  CardWrapper,
  PhotoWrapper,
  Photo,
  Text,
  BtnWrapper,
  Button,
  Input,
} from './UserSetsCardStyled';

export const UserSetsCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { name, avatarUrl } = useSelector(selectUser);
  const fileInput = useRef(null);

  const customDispatch = useIsLoading();
  const noAvatar = avatarUrl === null;

  const resizeFile = file =>
    new Promise(resolve => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        'JPEG',
        100,
        0,
        uri => {
          resolve(uri);
        },
        'file'
      );
    });

  const handleUploadAvatar = async e => {
    const file = e.target.files[0];
    if (!file) return;
    const image = await resizeFile(file);
    customDispatch(changeUserAvatar, image, setIsLoading);
  };

  const handleRedirectClick = () => {
    fileInput.current.click();
  };

  const handleDeletePhoto = () => {
    const id = takeID(avatarUrl);
    customDispatch(deleteUserAvatar, id, setIsLoading);
  };

  return (
    <CardWrapper>
      <PhotoWrapper>
        {noAvatar && !isLoading && <Text>{takeFirstLetter(name)}</Text>}
        {!noAvatar && !isLoading && (
          <Photo src={avatarUrl} alt="user avatar" width={150} />
        )}
        {isLoading && <Loader width="60" height="60" />}
        <Input
          ref={fileInput}
          onChange={handleUploadAvatar}
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />
      </PhotoWrapper>

      <BtnWrapper>
        <Button onClick={handleRedirectClick} disabled={isLoading}>
          Upload new photo
        </Button>
        <Button onClick={handleDeletePhoto} disabled={noAvatar || isLoading}>
          Remove
        </Button>
      </BtnWrapper>
    </CardWrapper>
  );
};
