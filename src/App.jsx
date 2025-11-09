import UserForm from './features/user/UserForm';
import UserGrid from './features/user/UserGrid';
import UserActions from './features/user/UserActions';
import './index.css';

const App = () => {
  return (
    <div className="container">
      <h1>User Details App</h1>
      <div className="user-layout">
        <UserForm />
        <UserGrid />
      </div>
      <div className="user-actions">
        <UserActions />
      </div>
    </div>
  );
};

export default App;
