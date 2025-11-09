import UserForm from './features/user/UserForm';
import UserGrid from './features/user/UserGrid';
import UserActions from './features/user/UserActions';
import './index.css';

const App = () => {
  return (
    <div className="container">
      <h1>User Details App</h1>
      <UserForm />
      <UserGrid />
      <UserActions />
    </div>
  );
};

export default App;
