import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { resetUsers } from './userSlice';
import type { RootState, AppDispatch } from '../../app/store';

const UserActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.user.details);

  const handleShowAlert = async () => {
    if (users.length === 0) {
      alert('No user details to show!');
      return;
    }

    alert(JSON.stringify(users, null, 2));
    console.log(users)

    try {
      const response = await axios.post('https://postapicall', users);
      alert('Users sent successfully!');
      console.log('Server response:', response.data);
      dispatch(resetUsers());
    } catch (error) {
      // console.error('Error sending users:', error);
      // alert('Error sending user data!');
    }
  };

  return (
    <div className="actions">
      <button onClick={handleShowAlert} className="btn success">
        Show All Details
      </button>
    </div>
  );
};

export default UserActions;
