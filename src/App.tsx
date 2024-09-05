import React from 'react';
import UserTable from './features/users/UserTable';
import { Provider } from 'react-redux';
import store from './app/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <UserTable />
      </div>
    </Provider>
  );
}

export default App;