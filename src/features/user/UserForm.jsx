import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice';
// import './User.css';

const UserForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(formData));
    setFormData({ name: '', age: '', phone: '', address: '' });
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>User Form</h2>
      <div className="form-group">
        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Age</label>
        <input name="age" value={formData.age} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn">Add User</button>
    </form>
  );
};

export default UserForm;
