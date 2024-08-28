import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  addCategory,
  deleteCategory,
  editCategory,
} from '../../redux/Category/operations';
import { selectCategories } from '../../redux/Category/categorySlice';
import {
  MainBox,
  Box,
  MainTitle,
  Title,
  ListWrapper,
  NoObjects,
  NoObjectsP,
  ListItem,
  ListSVG,
  ButtonSVG,
  IconStyled,
  LabelCategory,
  InputCategory,
  SubmitButton,
  FormStyle,
  InputBox,
} from './CategoriesModalStyled';
import { getTransactions } from '../../redux/Transaction/operations';

export const CategoriesModal = ({ type, transportCategory }) => {
  const categories = useSelector(selectCategories);

  const dispatch = useDispatch();
  const ulRef = useRef(null);

  const [categoryName, setCategoryName] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleSubmitCategory = e => {
    e.preventDefault();
    if (categoryName.length > 16) {
      toast.error(
        'Category name length must be less than or equal to 16 characters long'
      );
      return;
    }

    if (isEditMode) {
      dispatch(editCategory({ categoryName, categoryId }))
        .unwrap()
        .then(() => {
          dispatch(getTransactions({ type }));
          setIsEditMode(false);
        })
        .catch(error => toast.error('Error editing category'));
    } else {
      dispatch(addCategory({ type, categoryName }))
        .unwrap()
        .then(() => {
          toast.success('New Category added successfully');

          ulRef.current.scrollTo({
            top: ulRef.current.scrollHeight,
            behavior: 'smooth',
          });
        })
        .catch(error => toast.error('Error adding category'));
    }
    setCategoryName('');
  };

  const handleInputChange = event => {
    setCategoryName(event.target.value);
  };

  const handleChangeCategory = (id, categoryName) => {
    setCategoryName(categoryName);
    setCategoryId(id);

    setIsEditMode(true);
  };

  const handleGetCategory = item => {
    transportCategory(item);
  };

  const handleDeleteCategory = (id, type) => {
    setIsEditMode(false);
    setIsButtonDisabled(true);

    dispatch(deleteCategory({ id, type }))
      .unwrap()
      .then(() => toast.success('Category deleted successfully'))
      .catch(error => {
        toast.error('Cannot delete category with existing transactions');
      })
      .finally(setIsButtonDisabled(false));
  };

  useEffect(() => {
    if (!isEditMode) {
      setCategoryName('');
    }
  }, [isEditMode]);

  return (
    <MainBox>
      <Box>
        <MainTitle>{type === 'expenses' ? 'Expenses' : 'Incomes'}</MainTitle>
        <Title>All Category</Title>

        <ListWrapper className="scroll scrollB" ref={ulRef}>
          {categories[type].length === 0 ? (
            <NoObjects>
              <NoObjectsP>There are no categories</NoObjectsP>
            </NoObjects>
          ) : (
            categories[type].map(item => (
              <ListItem key={item._id}>
                <p>{item.categoryName}</p>

                <ListSVG>
                  <ListItem>
                    <ButtonSVG onClick={() => handleGetCategory(item)}>
                      <IconStyled name="check" size="16" />
                    </ButtonSVG>
                  </ListItem>
                  <ListItem>
                    <ButtonSVG
                      onClick={() =>
                        handleChangeCategory(item._id, item.categoryName)
                      }
                    >
                      <IconStyled name="edit" size="16" />
                    </ButtonSVG>
                  </ListItem>
                  <ListItem>
                    <ButtonSVG
                      onClick={() => handleDeleteCategory(item._id, type)}
                      disabled={isButtonDisabled}
                    >
                      <IconStyled name="trash-bin" size="16" />
                    </ButtonSVG>
                  </ListItem>
                </ListSVG>
              </ListItem>
            ))
          )}
        </ListWrapper>
      </Box>

      <FormStyle onSubmit={handleSubmitCategory}>
        <LabelCategory htmlFor="categoryInput">
          {isEditMode ? 'Edit Category' : 'New Category'}
        </LabelCategory>
        <InputBox>
          <InputCategory
            type="text"
            id="categoryInput"
            placeholder="Enter the text"
            onChange={handleInputChange}
            value={categoryName}
          />

          <SubmitButton type="submit" disabled={categoryName.length === 0}>
            {isEditMode ? 'Edit' : 'Add'}
          </SubmitButton>
        </InputBox>
      </FormStyle>
    </MainBox>
  );
};
