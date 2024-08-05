import React from 'react'

export const usersCardList = [{
  title: 'Shankar Ganesh',
  cardImageUrl: 'https://avatars.githubusercontent.com/u/3478542?v=4',
  cardBackgroundUrl: 'images/banner.png',
  subTitle: ['Associate Vice President', 'Coimbatore South, Tamil Nadu, India', 'Sleep Mode: On'],
  stats: [
    { label: '📅', value: '1st Sep 2020' },
    { label: '🎯', value: '17,625' },
    { label: '🕒', value: '3.5 hours' },
  ]
},
{
  title: 'Karthikeyan Annamalai',
  cardImageUrl: 'https://avatars.githubusercontent.com/u/6830053?v=4',
  cardBackgroundUrl: 'images/banner.png',
  subTitle: ['Devops Lead', 'Chennai, Tamil Nadu, India', 'Sleep Mode: On'],
  stats: [
    { label: '📅', value: '1st Sep 2020' },
    { label: '🎯', value: '36,655' },
    { label: '🕒', value: '3 hours' },
  ]
}, {
  title: 'Yuvaraj Ravi',
  cardImageUrl: 'https://avatars.githubusercontent.com/u/29545937?v=4',
  cardBackgroundUrl: 'images/banner.png',
  subTitle: ['Associate Vice President', 'Bengaluru, Karnataka, India', 'Sleep Mode: Off'],
  stats: [
    { label: '📅', value: '1st Sep 2020' },
    { label: '🎯', value: '21,845' },
    { label: '🕒', value: '2.5 hours' },
  ],
}];

export const statItems = [{
  label: 'Transactions every 24 hours',
  value: '44 million',
}, {
  label: 'Assets under holding',
  value: '$119 trillion',
}, {
  label: 'New users annually',
  value: '46,000',
}];

export const userStackList = [{
  name: 'Shankar Ganesh',
  profileImageUrl: 'https://avatars.githubusercontent.com/u/3478542?v=4',
  location: 'Coimbatore South, Tamil Nadu, India',
  profession: 'Architect',
  connected: '3h ago'
}, {
  name: 'Karthikeyan Annamalai',
  profileImageUrl: 'https://avatars.githubusercontent.com/u/6830053?v=4',
  location: 'Chennai, Tamil Nadu, India',
  profession: 'Devops Lead',
  connected: '3h ago'
}, {
  name: 'Yuvaraj Ravi',
  profileImageUrl: 'https://avatars.githubusercontent.com/u/29545937?v=4',
  location: 'Bengaluru, Karnataka, India',
  profession: 'Frontend Developer',
  connected: '3h ago'
}, {
  name: 'Venkatraman Ramamoorthy',
  profileImageUrl: 'https://avatars.githubusercontent.com/u/1652629?v=4',
  location: 'Singapore',
  profession: 'Fullstack Developer',
  connected: '3h ago'
}];

// export const postItemList = [];
export const postItemList = [{
  name: 'Yuvaraj Ravi',
  postedOn: '2 hours ago',
  imageUrl: 'https://avatars.githubusercontent.com/u/29545937?v=4',
  likeCount: '43',
  commentCount: '3',
  content: (
    <p class="text-gray-800">Team, i'm done with SSO Integration! 🧑‍💻 🔑 <a href="" class="text-blue-600">#KeyCloak</a>&nbsp;<a href="" class="text-blue-600">#SSO</a>
    </p>
  )
}, {
  name: 'Karthikeyan Annamalai',
  postedOn: '3 hours ago',
  imageUrl: 'https://avatars.githubusercontent.com/u/6830053?v=4',
  likeCount: '34',
  commentCount: '7',
  content: (
    <p class="text-gray-800">Guys, get ready we will have stand up 👥 @ 5.30 PM 📞. <a href="" class="text-blue-600">#Thursday</a>&nbsp;<a href="" class="text-blue-600">#StandUp</a>
    </p>
  )
}];