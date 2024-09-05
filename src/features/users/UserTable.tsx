import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from './usersSlice';
import { fetchUsers, selectUsers } from './usersSlice';
import { AppDispatch } from '../../app/store';
import { UserState } from '../../types';
import FilterInput from './FilterInput';

const initialState: UserState = {
  users: [],
  filters: {
    name: '',
    username: '',
    email: '',
    phone: null
  }
};

const UserTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectUsers);
  const filters = useSelector((state: any) => state.users.filters);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleChange = (field: keyof typeof initialState.filters) => (value: string) => {
    dispatch(setFilter({ field, value }));
  };

  return (
    <div>
    <div className="p-20">
    <h1 className="pb-4 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">User Management Table</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-md">
          <thead className="bg-slate-200">
            <tr>
              <th className="px-6 py-3 border-b border-slate-300 text-left text-sm font-semibold text-slate-800">ID</th>
              <th className="px-6 py-3 border-b border-slate-300 text-left text-sm font-semibold text-slate-800">Name</th>
              <th className="px-6 py-3 border-b border-slate-300 text-left text-sm font-semibold text-slate-800">User Name</th>
              <th className="px-6 py-3 border-b border-slate-300 text-left text-sm font-semibold text-slate-800">Email</th>
              <th className="px-6 py-3 border-b border-slate-300 text-left text-sm font-semibold text-slate-800">Phone</th>
            </tr>
            <tr>
            <th className="px-6 py-3 border-b border-gray-300 text-left">
            </th>
            <th className="px-6 py-3 border-b border-gray-300 text-left">
              <FilterInput label="" value={filters.name} onChange={handleChange('name')} />
            </th>
            <th className="px-6 py-3 border-b border-gray-300 text-left">
              <FilterInput label="" value={filters.username} onChange={handleChange('username')} />
            </th>
            <th className="px-6 py-3 border-b border-gray-300 text-left">
              <FilterInput label="" value={filters.email} onChange={handleChange('email')} />
            </th>
            <th className="px-6 py-3 border-b border-gray-300 text-left">
              <FilterInput label="" value={filters.phone ? filters.phone.toString() : ''} onChange={handleChange('phone')} />
            </th>
          </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map(user => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b border-gray-300 text-sm">{user.id}</td>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm">{user.name}</td>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm">{user.username}</td>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm">{user.email}</td>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm">{user.phone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-600">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
    </div>
    </div>
  );
}

export default UserTable;