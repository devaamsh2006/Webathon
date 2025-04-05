import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

function EventById() {
  const navigate=useNavigate();
  const { state } = useLocation();
  const {isSignedIn}=useUser()
  const {
    _id,
    eventname,
    description,
    poster,
    club,
    date_time,
    venue,
    mode,
    payment,
    eventType,
    coordinator,
    noOfSeats: initialSeats,
    volunteer,
  } = state;

  const [noOfSeats, setNoOfSeats] = useState(initialSeats);
  const [registered, setRegistered] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if(isSignedIn===true){
    if (registered || noOfSeats <= 0) return;
    setLoading(true);
    try {
      const res = await axios.patch(`http://localhost:4000/events/${state._id}/register`);
      setNoOfSeats(res.data.noOfSeats);
      setRegistered(true);
      setMessage(res.data.message || "Successfully Registered");
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong.");
    }
    setLoading(false);
    }
    else
    {
        navigate('/login')
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-2xl">
      {poster && (
        <img
          src={poster}
          alt={`${eventname} Poster`}
          className="w-full h-64 object-contain rounded-xl mb-6"
        />
      )}

      <h1 className="text-3xl font-bold mb-4">{eventname}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-gray-600 font-semibold">Club:</p>
          <p>{club}</p>
        </div>

        <div>
          <p className="text-gray-600 font-semibold">Date & Time:</p>
          <p>{new Date(date_time).toLocaleString()}</p>
        </div>

        <div>
          <p className="text-gray-600 font-semibold">Venue:</p>
          <p>{venue}</p>
        </div>

        <div>
          <p className="text-gray-600 font-semibold">Mode:</p>
          <p>{mode}</p>
        </div>

        <div>
          <p className="text-gray-600 font-semibold">Payment:</p>
          <p>{payment}</p>
        </div>

        <div>
          <p className="text-gray-600 font-semibold">Event Type:</p>
          <p>{eventType}</p>
        </div>

        <div>
          <p className="text-gray-600 font-semibold">Coordinator:</p>
          <p>{coordinator}</p>
        </div>

        <div>
          <p className="text-gray-600 font-semibold">Seats Left:</p>
          <p>{noOfSeats}</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-600 font-semibold mb-1">Description:</p>
        <p className="whitespace-pre-line">{description}</p>
      </div>

      <div className="mb-6">
        <p className="text-gray-600 font-semibold mb-1">Volunteers:</p>
        {volunteer && volunteer.length > 0 ? (
          <ul className="list-disc list-inside">
            {volunteer.map((v, index) => (
              <li key={index}>{v}</li>
            ))}
          </ul>
        ) : (
          <p>No volunteers assigned yet.</p>
        )}
      </div>

      <div className="flex flex-col items-start gap-3">
        <button
          onClick={handleRegister}
          disabled={registered || noOfSeats <= 0 || loading}
          className={`px-6 py-2 rounded-lg text-white transition ${
            registered || noOfSeats <= 0
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {registered
            ? 'Successfully Registered'
            : loading
            ? 'Registering...'
            : 'Register'}
        </button>

        {/* {message && <p className="text-green-600">{message}</p>} */}
      </div>
    </div>
  );
}

export default EventById;
