// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Events= () => {
const [searchQuery, setSearchQuery] = useState('');
const categories = [
{
name: 'Academic',
count: 42,
icon: 'fa-graduation-cap',
imageUrl: 'https://public.readdy.ai/ai/img_res/8f6e594b22e6834336a89ad1f0526034.jpg'
},
{
name: 'Cultural',
count: 37,
icon: 'fa-theater-masks',
imageUrl: 'https://public.readdy.ai/ai/img_res/fde8cea6e76b2a663216cb0a01cd9a3c.jpg'
},
{
name: 'Sports',
count: 28,
icon: 'fa-basketball-ball',
imageUrl: 'https://public.readdy.ai/ai/img_res/86e07e186d283d63040fba743dd8710f.jpg'
},
{
name: 'Career',
count: 19,
icon: 'fa-briefcase',
imageUrl: 'https://public.readdy.ai/ai/img_res/03e9bb923209e67a04ba32563aefc0d4.jpg'
},
{
name: 'Technology',
count: 24,
icon: 'fa-laptop-code',
imageUrl: 'https://public.readdy.ai/ai/img_res/cc2ad5e546a374214f2e3551a4aec8c2.jpg'
},
{
name: 'Art & Design',
count: 31,
icon: 'fa-paint-brush',
imageUrl: 'https://public.readdy.ai/ai/img_res/07210edb7baf66d8f402790bf2719cc0.jpg'
}
];
const trendingEvents = [
{
id: 1,
title: 'Annual Tech Summit 2025',
description: 'Join industry leaders for a day of innovation and networking',
date: 'Apr 15, 2025',
time: '10:00 AM - 4:00 PM',
location: 'Main Campus Auditorium',
category: 'Technology',
interested: 156,
going: 89,
status: 'Open',
imageUrl: 'https://public.readdy.ai/ai/img_res/55dbfe05753cbc6a56d06fcea96fcfd5.jpg'
},
{
id: 2,
title: 'Spring Cultural Festival',
description: 'Celebrate diversity with performances, food, and activities',
date: 'Apr 20, 2025',
time: '12:00 PM - 8:00 PM',
location: 'University Commons',
category: 'Cultural',
interested: 243,
going: 178,
status: 'Open',
imageUrl: 'https://public.readdy.ai/ai/img_res/86e43eab6c95e01ff52ddef9b9e11a5c.jpg'
},
{
id: 3,
title: 'Career Fair: Future Leaders',
description: 'Connect with top employers from various industries',
date: 'Apr 25, 2025',
time: '9:00 AM - 3:00 PM',
location: 'Business School Hall',
category: 'Career',
interested: 312,
going: 205,
status: 'Open',
imageUrl: 'https://public.readdy.ai/ai/img_res/3e9b504433f7d69d4564dcb8c95e7dee.jpg'
},
{
id: 4,
title: 'Inter-College Basketball Tournament',
description: 'Witness thrilling matches between rival colleges',
date: 'Apr 18, 2025',
time: '2:00 PM - 6:00 PM',
location: 'Sports Complex',
category: 'Sports',
interested: 189,
going: 124,
status: 'Open',
imageUrl: 'https://public.readdy.ai/ai/img_res/fcb02b40471baba71781c325dd562f14.jpg'
},
{
id: 5,
title: 'AI Workshop: Machine Learning Basics',
description: 'Learn the fundamentals of machine learning and AI applications',
date: 'Apr 12, 2025',
time: '1:00 PM - 5:00 PM',
location: 'Computer Science Building',
category: 'Academic',
interested: 176,
going: 98,
status: 'Almost Full',
imageUrl: 'https://public.readdy.ai/ai/img_res/05ec9f1715d62a5a863e0323b463b33a.jpg'
}
];
const upcomingEvents = [
{
id: 1,
title: 'Research Symposium',
time: '9:00 AM',
date: 'Today',
location: 'Science Building, Room 302',
category: 'Academic'
},
{
id: 2,
title: 'Debate Club Meeting',
time: '2:00 PM',
date: 'Today',
location: 'Liberal Arts Center',
category: 'Academic'
},
{
id: 3,
title: 'Volleyball Practice',
time: '4:30 PM',
date: 'Today',
location: 'Indoor Sports Hall',
category: 'Sports'
},
{
id: 4,
title: 'Photography Exhibition',
time: '10:00 AM',
date: 'Tomorrow',
location: 'Art Gallery',
category: 'Art & Design'
},
{
id: 5,
title: 'Entrepreneurship Talk',
time: '1:00 PM',
date: 'Tomorrow',
location: 'Business School Auditorium',
category: 'Career'
},
{
id: 6,
title: 'International Food Festival',
time: '5:00 PM',
date: 'Apr 8, 2025',
location: 'University Commons',
category: 'Cultural'
}
];
const popularOrganizations = [
{ name: 'Student Government Association', events: 15, followers: 1240 },
{ name: 'Tech Innovators Club', events: 12, followers: 980 },
{ name: 'Cultural Diversity Alliance', events: 10, followers: 875 },
{ name: 'Sports Federation', events: 9, followers: 760 }
];
const latestActivities = [
{ user: 'Alex Johnson', action: 'registered for', event: 'Annual Tech Summit 2025', time: '2 hours ago' },
{ user: 'Maria Garcia', action: 'is interested in', event: 'Spring Cultural Festival', time: '4 hours ago' },
{ user: 'James Wilson', action: 'created', event: 'Coding Bootcamp Weekend', time: '6 hours ago' },
{ user: 'Sophia Chen', action: 'commented on', event: 'Career Fair: Future Leaders', time: '8 hours ago' }
];
return (
<div className="min-h-screen bg-gray-50">
{/* Hero Banner */}
<section className="relative overflow-hidden">
<div className="absolute inset-0 z-0">
<img
src="https://public.readdy.ai/ai/img_res/c9a08583dbdfa3ab07a0a3217bdec364.jpg"
alt="Campus life"
className="w-full h-full object-cover object-top"
/>
<div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-indigo-800/70 to-transparent"></div>
</div>
<div className="container mx-auto px-4 py-20 relative z-10">
<div className="max-w-2xl text-white">
<h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Campus Life at Its Best</h1>
<p className="text-xl mb-6">Connect with over 500+ events and 10,000+ active students across campus</p>
<div className="flex flex-wrap gap-4">
<Button className="bg-white text-indigo-700 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer">
<i className="fas fa-search mr-2"></i> Browse Events
</Button>
<Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 !rounded-button whitespace-nowrap cursor-pointer">
<i className="fas fa-plus mr-2"></i> Create Event
</Button>
</div>
</div>
</div>
</section>
{/* Event Categories */}
<section className="py-12 bg-white">
<div className="container mx-auto px-4">
<h2 className="text-2xl font-bold mb-8 text-gray-800">Explore by Category</h2>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
{categories.map((category, index) => (
<div key={index} className="group cursor-pointer">
<div className="relative h-40 rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-lg">
<img
src={category.imageUrl}
alt={category.name}
className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
<div className="flex items-center mb-1">
<i className={`fas ${category.icon} mr-2`}></i>
<h3 className="font-semibold">{category.name}</h3>
</div>
<p className="text-sm text-white/80">{category.count} events</p>
</div>
</div>
</div>
))}
</div>
</div>
</section>
{/* Trending Events */}
<section className="py-12 bg-gray-50">
<div className="container mx-auto px-4">
<div className="flex justify-between items-center mb-8">
<h2 className="text-2xl font-bold text-gray-800">Trending Events</h2>
<Button variant="link" className="text-indigo-600 !rounded-button whitespace-nowrap cursor-pointer">
View All <i className="fas fa-arrow-right ml-2"></i>
</Button>
</div>
<Swiper
modules={[Pagination, Navigation, Autoplay]}
spaceBetween={20}
slidesPerView={1}
navigation
pagination={{ clickable: true }}
breakpoints={{
640: { slidesPerView: 2 },
1024: { slidesPerView: 3 }
}}
className="pb-12"
autoplay={{ delay: 5000, disableOnInteraction: false }}
>
{trendingEvents.map((event) => (
<SwiperSlide key={event.id}>
<Card className="h-full cursor-pointer hover:shadow-lg transition-shadow">
<div className="relative h-48 overflow-hidden rounded-t-lg">
<img
src={event.imageUrl}
alt={event.title}
className="w-full h-full object-cover object-top"
/>
<div className="absolute top-3 right-3">
<Badge className={`
${event.status === 'Open' ? 'bg-green-500' : 'bg-amber-500'}
hover:${event.status === 'Open' ? 'bg-green-600' : 'bg-amber-600'}
`}>
{event.status}
</Badge>
</div>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
<div className="text-white text-sm font-medium">
<i className="far fa-calendar-alt mr-2"></i>
{event.date} • {event.time}
</div>
</div>
</div>
<CardHeader className="pb-2">
<Badge className="mb-2">{event.category}</Badge>
<CardTitle className="text-lg">{event.title}</CardTitle>
<CardDescription className="line-clamp-2">{event.description}</CardDescription>
</CardHeader>
<CardContent className="pb-2">
<div className="flex items-center text-sm text-gray-500">
<i className="fas fa-map-marker-alt mr-2"></i>
<span>{event.location}</span>
</div>
</CardContent>
<CardFooter className="pt-0 flex justify-between">
<div className="flex space-x-4 text-sm text-gray-500">
<div className="flex items-center">
<i className="far fa-heart mr-1"></i>
<span>{event.interested}</span>
</div>
<div className="flex items-center">
<i className="far fa-calendar-check mr-1"></i>
<span>{event.going}</span>
</div>
</div>
<Button size="sm" className="!rounded-button whitespace-nowrap cursor-pointer">Register</Button>
</CardFooter>
</Card>
</SwiperSlide>
))}
</Swiper>
</div>
</section>
{/* Upcoming Events Timeline */}
<section className="py-12 bg-white">
<div className="container mx-auto px-4">
<h2 className="text-2xl font-bold mb-8 text-gray-800">Upcoming Events</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<Tabs defaultValue="all" className="w-full">
<TabsList className="grid grid-cols-5 mb-6">
<TabsTrigger value="all" className="!rounded-button whitespace-nowrap cursor-pointer">All</TabsTrigger>
<TabsTrigger value="academic" className="!rounded-button whitespace-nowrap cursor-pointer">Academic</TabsTrigger>
<TabsTrigger value="cultural" className="!rounded-button whitespace-nowrap cursor-pointer">Cultural</TabsTrigger>
<TabsTrigger value="sports" className="!rounded-button whitespace-nowrap cursor-pointer">Sports</TabsTrigger>
<TabsTrigger value="career" className="!rounded-button whitespace-nowrap cursor-pointer">Career</TabsTrigger>
</TabsList>
<TabsContent value="all" className="mt-0">
<div className="space-y-4">
{upcomingEvents.map((event) => (
<div
key={event.id}
className={`flex items-start p-4 rounded-lg border ${
event.date === 'Today' ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200 bg-white'
}`}
>
<div className="flex-shrink-0 w-16 text-center mr-4">
<div className="text-lg font-bold text-indigo-600">{event.time}</div>
<div className={`text-sm ${event.date === 'Today' ? 'font-semibold text-indigo-600' : 'text-gray-500'}`}>
{event.date}
</div>
</div>
<div className="flex-grow">
<div className="flex items-center mb-1">
<Badge variant="outline" className="mr-2">{event.category}</Badge>
<h3 className="font-semibold">{event.title}</h3>
</div>
<div className="text-sm text-gray-500 mb-2">
<i className="fas fa-map-marker-alt mr-1"></i> {event.location}
</div>
</div>
<Button size="sm" variant={event.date === 'Today' ? "default" : "outline"} className="flex-shrink-0 !rounded-button whitespace-nowrap cursor-pointer">
{event.date === 'Today' ? 'Register Now' : 'Interested'}
</Button>
</div>
))}
</div>
</TabsContent>
<TabsContent value="academic" className="mt-0">
<div className="space-y-4">
{upcomingEvents.filter(e => e.category === 'Academic').map((event) => (
<div
key={event.id}
className={`flex items-start p-4 rounded-lg border ${
event.date === 'Today' ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200 bg-white'
}`}
>
<div className="flex-shrink-0 w-16 text-center mr-4">
<div className="text-lg font-bold text-indigo-600">{event.time}</div>
<div className={`text-sm ${event.date === 'Today' ? 'font-semibold text-indigo-600' : 'text-gray-500'}`}>
{event.date}
</div>
</div>
<div className="flex-grow">
<div className="flex items-center mb-1">
<Badge variant="outline" className="mr-2">{event.category}</Badge>
<h3 className="font-semibold">{event.title}</h3>
</div>
<div className="text-sm text-gray-500 mb-2">
<i className="fas fa-map-marker-alt mr-1"></i> {event.location}
</div>
</div>
<Button size="sm" variant={event.date === 'Today' ? "default" : "outline"} className="flex-shrink-0 !rounded-button whitespace-nowrap cursor-pointer">
{event.date === 'Today' ? 'Register Now' : 'Interested'}
</Button>
</div>
))}
</div>
</TabsContent>
{/* Other tabs content would be similar */}
<TabsContent value="cultural" className="mt-0">
<div className="space-y-4">
{upcomingEvents.filter(e => e.category === 'Cultural').map((event) => (
<div
key={event.id}
className={`flex items-start p-4 rounded-lg border ${
event.date === 'Today' ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200 bg-white'
}`}
>
<div className="flex-shrink-0 w-16 text-center mr-4">
<div className="text-lg font-bold text-indigo-600">{event.time}</div>
<div className={`text-sm ${event.date === 'Today' ? 'font-semibold text-indigo-600' : 'text-gray-500'}`}>
{event.date}
</div>
</div>
<div className="flex-grow">
<div className="flex items-center mb-1">
<Badge variant="outline" className="mr-2">{event.category}</Badge>
<h3 className="font-semibold">{event.title}</h3>
</div>
<div className="text-sm text-gray-500 mb-2">
<i className="fas fa-map-marker-alt mr-1"></i> {event.location}
</div>
</div>
<Button size="sm" variant={event.date === 'Today' ? "default" : "outline"} className="flex-shrink-0 !rounded-button whitespace-nowrap cursor-pointer">
{event.date === 'Today' ? 'Register Now' : 'Interested'}
</Button>
</div>
))}
</div>
</TabsContent>
<TabsContent value="sports" className="mt-0">
<div className="space-y-4">
{upcomingEvents.filter(e => e.category === 'Sports').map((event) => (
<div
key={event.id}
className={`flex items-start p-4 rounded-lg border ${
event.date === 'Today' ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200 bg-white'
}`}
>
<div className="flex-shrink-0 w-16 text-center mr-4">
<div className="text-lg font-bold text-indigo-600">{event.time}</div>
<div className={`text-sm ${event.date === 'Today' ? 'font-semibold text-indigo-600' : 'text-gray-500'}`}>
{event.date}
</div>
</div>
<div className="flex-grow">
<div className="flex items-center mb-1">
<Badge variant="outline" className="mr-2">{event.category}</Badge>
<h3 className="font-semibold">{event.title}</h3>
</div>
<div className="text-sm text-gray-500 mb-2">
<i className="fas fa-map-marker-alt mr-1"></i> {event.location}
</div>
</div>
<Button size="sm" variant={event.date === 'Today' ? "default" : "outline"} className="flex-shrink-0 !rounded-button whitespace-nowrap cursor-pointer">
{event.date === 'Today' ? 'Register Now' : 'Interested'}
</Button>
</div>
))}
</div>
</TabsContent>
<TabsContent value="career" className="mt-0">
<div className="space-y-4">
{upcomingEvents.filter(e => e.category === 'Career').map((event) => (
<div
key={event.id}
className={`flex items-start p-4 rounded-lg border ${
event.date === 'Today' ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200 bg-white'
}`}
>
<div className="flex-shrink-0 w-16 text-center mr-4">
<div className="text-lg font-bold text-indigo-600">{event.time}</div>
<div className={`text-sm ${event.date === 'Today' ? 'font-semibold text-indigo-600' : 'text-gray-500'}`}>
{event.date}
</div>
</div>
<div className="flex-grow">
<div className="flex items-center mb-1">
<Badge variant="outline" className="mr-2">{event.category}</Badge>
<h3 className="font-semibold">{event.title}</h3>
</div>
<div className="text-sm text-gray-500 mb-2">
<i className="fas fa-map-marker-alt mr-1"></i> {event.location}
</div>
</div>
<Button size="sm" variant={event.date === 'Today' ? "default" : "outline"} className="flex-shrink-0 !rounded-button whitespace-nowrap cursor-pointer">
{event.date === 'Today' ? 'Register Now' : 'Interested'}
</Button>
</div>
))}
</div>
</TabsContent>
</Tabs>
</div>
<div className="bg-indigo-50 rounded-xl p-6">
<h3 className="text-xl font-bold mb-6 text-indigo-800">Your Calendar</h3>
<div className="grid grid-cols-7 gap-1 mb-4">
{['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
<div key={i} className="text-center text-sm font-medium text-gray-500">{day}</div>
))}
{Array.from({ length: 4 }, (_, i) => (
<div key={i} className="text-center text-sm text-gray-400 py-2">
{i + 1}
</div>
))}
{Array.from({ length: 31 - 4 }, (_, i) => {
const day = i + 5;
const isToday = day === 5; // Assuming today is the 5th
const hasEvent = [5, 8, 15, 20, 25].includes(day);
return (
<div
key={i + 4}
className={`
text-center py-2 text-sm rounded-full cursor-pointer
${isToday ? 'bg-indigo-600 text-white font-bold' : ''}
${hasEvent && !isToday ? 'bg-indigo-100 text-indigo-600 font-medium' : ''}
${!hasEvent && !isToday ? 'hover:bg-indigo-100' : ''}
`}
>
{day}
</div>
);
})}
</div>
<Separator className="my-6" />
<div className="space-y-4">
<h4 className="font-semibold text-indigo-800">Today's Schedule</h4>
{upcomingEvents.filter(e => e.date === 'Today').map((event) => (
<div key={event.id} className="flex items-start bg-white p-3 rounded-lg shadow-sm">
<div className="flex-shrink-0 w-12 text-center mr-3">
<div className="text-sm font-bold text-indigo-600">{event.time}</div>
</div>
<div className="flex-grow">
<h3 className="font-medium text-sm">{event.title}</h3>
<div className="text-xs text-gray-500">
<i className="fas fa-map-marker-alt mr-1"></i> {event.location}
</div>
</div>
</div>
))}
<Button variant="link" className="w-full text-indigo-600 !rounded-button whitespace-nowrap cursor-pointer">
View Full Calendar <i className="fas fa-arrow-right ml-1"></i>
</Button>
</div>
</div>
</div>
</div>
</section>

<div className="fixed bottom-6 right-6 z-50">
<Button 
  className="h-14 w-14 rounded-full shadow-lg !rounded-button whitespace-nowrap cursor-pointer"
  onClick={() => document.getElementById('create-modal')?.classList.remove('hidden')}
>
  <i className="fas fa-plus text-xl"></i>
</Button>

{/* Create Modal */}
<div id="create-modal" className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 hidden">
  <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 overflow-hidden">
    <div className="p-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Create New</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0 !rounded-button"
          onClick={() => document.getElementById('create-modal')?.classList.add('hidden')}
        >
          <i className="fas fa-times"></i>
        </Button>
      </div>
    </div>
    
    <div className="p-4">
      <Tabs defaultValue="event">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="event" className="!rounded-button whitespace-nowrap cursor-pointer">
            <i className="fas fa-calendar-alt mr-2"></i> Event
          </TabsTrigger>
          <TabsTrigger value="organization" className="!rounded-button whitespace-nowrap cursor-pointer">
            <i className="fas fa-users mr-2"></i> Organization
          </TabsTrigger>
          <TabsTrigger value="announcement" className="!rounded-button whitespace-nowrap cursor-pointer">
            <i className="fas fa-bullhorn mr-2"></i> Announcement
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="event" className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Event Title</label>
            <Input placeholder="Enter event title" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <Input type="date" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Time</label>
              <Input type="time" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <Input placeholder="Enter location" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <div className="grid grid-cols-3 gap-2">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center">
                  <input 
                    type="radio" 
                    id={`cat-${index}`} 
                    name="category" 
                    className="mr-2" 
                  />
                  <label htmlFor={`cat-${index}`} className="text-sm">{category.name}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea 
              className="w-full min-h-[100px] rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Describe your event"
            ></textarea>
          </div>
        </TabsContent>
        
        <TabsContent value="organization" className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Organization Name</label>
            <Input placeholder="Enter organization name" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Type</label>
            <Input placeholder="e.g., Club, Society, Association" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea 
              className="w-full min-h-[100px] rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Describe your organization"
            ></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Contact Email</label>
            <Input type="email" placeholder="Enter contact email" />
          </div>
        </TabsContent>
        
        <TabsContent value="announcement" className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <Input placeholder="Enter announcement title" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Target Audience</label>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer">All Students</Badge>
              <Badge variant="outline" className="cursor-pointer">Faculty</Badge>
              <Badge variant="outline" className="cursor-pointer">Staff</Badge>
              <Badge variant="outline" className="cursor-pointer">Club Members</Badge>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea 
              className="w-full min-h-[100px] rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your announcement"
            ></textarea>
          </div>
        </TabsContent>
      </Tabs>
    </div>
    
    <div className="p-4 bg-gray-50 flex justify-end gap-2 border-t border-gray-200">
      <Button 
        variant="outline" 
        className="!rounded-button whitespace-nowrap cursor-pointer"
        onClick={() => document.getElementById('create-modal')?.classList.add('hidden')}
      >
        Cancel
      </Button>
      <Button 
        className="!rounded-button whitespace-nowrap cursor-pointer"
        onClick={() => {
          document.getElementById('create-modal')?.classList.add('hidden');
          // Here you would normally handle form submission
        }}
      >
        Create
      </Button>
    </div>
  </div>
</div>
</div>
</div>
);
};
export default Events;

