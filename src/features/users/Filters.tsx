import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/rootReducer';
import { setFilter } from './usersSlice';
import { User, UserState } from '../../types';
import FilterInput from './FilterInput'

const initialState: UserState = {
  users: [],
  filters: {
    name: '',
    username: '',
    email: '',
    phone: null
  }
};

const Filters: React.FC = () => {
  const dispatch = useDispatch();

  const filters = useSelector((state: RootState) => state.users.filters);

  const handleChange = (field: keyof typeof initialState.filters) => (value: string) => {
    dispatch(setFilter({ field, value }));
  };

  // const handleChange = (field: keyof typeof filters) => (value: string) => {
  //   dispatch(setFilter({ field, value }));
  // };

  return (
    <div>
      <div>
      <FilterInput label="Name" value={filters.name} onChange={handleChange('name')} />
      <FilterInput label="User Name" value={filters.username} onChange={handleChange('username')} />
      <FilterInput label="Email" value={filters.email} onChange={handleChange('email')} />
      <FilterInput label="Phone" value={filters.phone ? filters.phone.toString() : ''} onChange={handleChange('phone')} />
    </div>

    </div>
  );
}

export default Filters;