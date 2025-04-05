import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { userDetails } from '../Context/UserAuthentication';

export default function Signup() {
  const { user } = useUser();
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(userDetails);

  const [userType, setUserType] = useState('student');
  const [formData, setFormData] = useState({
    name: user?.fullName || '',
    email: user?.emailAddresses[0].emailAddress || '',
    rollno: '',
    coordinator: '', 
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = userType === 'student' ? '/users/signup' : '/clubs/signup';
      const payload = userType === 'student'
        ? {
            name: formData.name,
            email: user?.emailAddresses[0].emailAddress,
            rollno: formData.rollno,
          }
        : {
            name: formData.name,
            email: user?.emailAddresses[0].emailAddress,
            coordinator: formData.coordinator,
          };

      const res = await axios.post(`http://localhost:4000${endpoint}`, payload);
      console.log(res);
      if (res.data.message==='new user') {
        const payLoad = res.data.payload;
        console.log(payLoad)
        await setCurrentUser({
          name: payLoad.name || payLoad.fullName,
          email: payLoad.email,
          userId: payLoad._id,
          userType,
        });

        navigate('/');
      } else {
        alert(res.data.message || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      alert('Error signing up');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Signup Details</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block text-sm font-medium text-gray-700">User Type</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="mt-1 block w-full border p-2 rounded"
          >
            <option value="student">Student</option>
            <option value="club">Club</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border p-2 rounded"
          />
        </div>

        {userType === 'student' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Roll Number</label>
            <input
              name="rollno"
              value={formData.rollno}
              onChange={handleChange}
              required
              className="mt-1 block w-full border p-2 rounded"
            />
          </div>
        )}

        {userType === 'club' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Coordinator Name</label>
            <input
              name="coordinator"
              value={formData.coordinator}
              onChange={handleChange}
              required
              className="mt-1 block w-full border p-2 rounded"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}