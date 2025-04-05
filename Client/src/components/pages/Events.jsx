import React, { useContext, useEffect, useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, CheckCircle, History } from 'lucide-react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { userDetails } from '../Context/UserAuthentication';




//  [
//   {
//     id: 1,
//     title: 'Annual Tech Summit 2025',
//     type: 'Technology',
//     date: '2025-04-15',
//     time: '10:00 AM - 4:00 PM',
//     location: 'Main Campus Auditorium',
//     image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000',
//     status: 'Confirmed',
//     attended: false,
//   },
//   {
//     id: 2,
//     title: 'Spring Cultural Festival',
//     type: 'Cultural',
//     date: '2025-04-20',
//     time: '12:00 PM - 8:00 PM',
//     location: 'University Commons',
//     image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1000',
//     status: 'Confirmed',
//     attended: false,
//   },
//   {
//     id: 3,
//     title: 'AI Workshop: Machine Learning Basics',
//     type: 'Academic',
//     date: '2025-04-12',
//     time: '1:00 PM - 5:00 PM',
//     location: 'Computer Science Building',
//     image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1000',
//     status: 'Pending Confirmation',
//     attended: false,
//   },
// ];

// [
//   {
//     id: 4,
//     title: 'Web Development Bootcamp',
//     type: 'Technology',
//     date: '2025-03-15',
//     time: '9:00 AM - 5:00 PM',
//     location: 'Virtual Event',
//     image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000',
//     status: 'Confirmed',
//     attended: true,
//   },
//   {
//     id: 5,
//     title: 'International Food Festival',
//     type: 'Cultural',
//     date: '2025-03-01',
//     time: '11:00 AM - 7:00 PM',
//     location: 'Student Center',
//     image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1000',
//     status: 'Confirmed',
//     attended: true,
//   },
//   {
//     id: 6,
//     title: 'Research Symposium 2025',
//     type: 'Academic',
//     date: '2025-02-28',
//     time: '2:00 PM - 6:00 PM',
//     location: 'Science Complex',
//     image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
//     status: 'Confirmed',
//     attended: true,
//   },
// ];

function Events() {
  const [UpcomingEvents,setEvents]=useState([]);

  const [AttendedEvents,setAttendedEvents]=useState([]); 
const {currentUser}=useContext(userDetails);
  const handleEvents=async(req,res)=>{
    const result=await axios.get(`http://localhost:4000/events/eventdetails/${currentUser.user_id}`);
    console.log(res);
    setEvents(result.data.payload);
  }
  
  useEffect(()=>{
    handleEvents();
  },[]);
  
  const [activeTab, setActiveTab] = useState('registered');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDate, setSelectedDate] = useState(null);

  const currentEvents = activeTab === 'registered' ? UpcomingEvents : AttendedEvents;

  const filteredEvents = currentEvents.filter((event) => {
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesDate =
      !selectedDate ||
      format(new Date(event.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
    return matchesType && matchesDate;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Events</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('registered')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              activeTab === 'registered'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <CheckCircle size={20} />
            Upcoming Events
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              activeTab === 'past'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <History size={20} />
            Attended Events
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6 items-center">
          {['all', 'Technology', 'Cultural', 'Academic'].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                selectedType === type
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {type === 'all' ? 'All Events' : type}
            </button>
          ))}

          {/* Date Filter */}
          <div className="flex items-center gap-2">
            <CalendarIcon size={20} className="text-gray-600" />
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Filter by Date"
              className="px-3 py-2 border rounded-md text-sm"
              dateFormat="yyyy-MM-dd"
              isClearable
            />
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <span
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                      event.attended
                        ? 'bg-green-500 text-white'
                        : event.status === 'Confirmed'
                        ? 'bg-blue-500 text-white'
                        : 'bg-yellow-500 text-white'
                    }`}
                  >
                    {event.attended ? 'Attended' : event.status}
                  </span>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium bg-black bg-opacity-50 text-white">
                    {event.type}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{event.title}</h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <CalendarIcon size={18} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock size={18} className="mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={18} className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {!event.attended ? (
                      <>
                        <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                          Add to Calendar
                        </button>
                        <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition">
                          View Ticket
                        </button>
                      </>
                    ) : (
                      <button className="w-full bg-gray-100 text-gray-600 py-2 rounded-lg hover:bg-gray-200 transition">
                        View Certificate
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 col-span-full text-center">
              No events found for selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Events;
