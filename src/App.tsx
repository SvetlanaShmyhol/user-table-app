import React from 'react';
import UserTable from './features/users/UserTable';
import Filters from './features/users/Filters';
import { Provider } from 'react-redux';
import store from './app/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Filters />
        <UserTable />
      </div>
    </Provider>
  );
}

export default App;