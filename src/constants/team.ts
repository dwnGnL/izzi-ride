import type { Worker } from '@type/team.type';

import shukhrat from '@public/images/owners/shukhrat.jpg';
import barzu from '@public/images/owners/barzu.jpg';
import farrukh from '@public/images/owners/farrukh.jpg';
import parvona from '@public/images/owners/parvona.jpg';
import vladimir from '@public/images/owners/vladimir.jpg';
import shahron from '@public/images/owners/shahron.jpg';

export const workers: Worker[] = [
  {
    image: shukhrat,
    about: "<p>Many years ago, when I was in Europe, one of my friends showed me a similar application. Almost everyone in Europe uses the same way of ride sharing and saves on their trip costs.</p><p>When I used it for the first time, I realized how comfortable, safe, and affordable ride sharing can be. A couple of years ago, I moved to the USA and was surprised to see people driving to another city or state alone with empty seats in their cars and not sharing their expenses and costs on high gas prices and tolls with others who need to go to the same place. It's also complicated for people without cars to travel to other cities and states, and there aren't many public transportations with affordable prices and comfortable departure times.</p><p>This inspired me to create an app that connects drivers and passengers who plan to go to the same place and makes it easy for them. I contacted my cousin, Barzu Rustami, who is a software developer, and discussed my idea with him. He agreed to help me with my idea. This app gives everyone in the USA the opportunity to make their trips more comfortable, easy, and profitable. I believe iZZi RIDE app will help others save on their trips and make them more comfortable.</p>",
    name: 'Shukhrat Safarov',
    position: 'SEO and User growth',
    founderText: 'CEO | Founder',
    isFounder: true,
  },
  {
    image: barzu,
    about: "<p>As a co-founder and developer of the app, I bring a deep passion for the product and a strong technical background to the team. I am excited to be a part of creating a product that will help people in a meaningful way.</p><p>I have always been interested in technology and its potential to solve problems. I started coding at a young age and have been building software ever since. I am passionate about creating user-friendly and intuitive products that make people's lives easier.</p>",
    name: 'Barzu Rustami',
    position: 'CTO',
    founderText: 'CTO',
    isFounder: true,
  },
  {
    image: farrukh,
    about: '<p>- Advisor, Local Growth – (New York area)</p> <p>Seasoned QA engineer with experience at IEEE and Citizens Bank. Advises iZZi Ride on local user acquisition, community growth and early-stage brand development in NYC.</p>',
    name: 'Farrukh Zaripov',
    position: 'iZZi Ride City Lead – New York',
    location: 'Somerset, NJ',
  },
  {
    image: vladimir,
    about: '<p>- Advisor, User Acquisition – (Northeast - USA area, Remote)</p> <p>Seasoned tech entrepreneur and executive with deep expertise in programmatic advertising, mobile app growth, and product management. As CEO & Co‑Founder of hybe.io, he led development of a scalable adtech platform designed for performance-driven mobile user acquisition   . Prior to that, he managed product strategy and business development across roles at hybrid.ai and Kayzen, overseeing digital marketing, analytics, and go‑to‑market operations.</p> <p>At iZZi Ride, Vladimir supports Northeast market expansion on a pro bono basis — advising on adtech-led user acquisition tactics, optimizing marketing funnels, and shaping data-driven growth initiatives to accelerate driver and rider onboarding in the city.</p>',
    name: 'Vladimir Khudiakov',
    position: 'Advisor User Acquisition',
    location: 'Berlin, Germany',
  },
  {
    image: parvona,
    about: '<p>- Student Ambassador & Growth Advisor (Boston area, Remote)</p> <p>Parvona is currently completing an internship at Harvard University. With strong ties to the student community and firsthand experience of campus life in the U.S., she plays a key role in promoting iZZi Ride among university students in the Boston area. Her focus is on organic user acquisition, especially among young and mobile audiences, by leveraging peer networks and student platforms at top schools like Harvard and MIT.</p>',
    name: 'Parvona Abdurakhmanova',
    position: 'iZZi Ride City Lead – Boston',
    location: 'Boston, MA',
  },
  {
    image: shahron,
    about: '<p>He is an 11th-grade student from Dushanbe who actively participates in international IT Olympiads and was selected to represent Tajikistan at IOI 2025 in Bolivia. A prizewinner of city and regional competitions, he is passionate about algorithms and programming, contributing his skills to strengthen the technical direction of iZZi Ride.</p>',
    name: 'Shahron Azizmurodzoda',
    position: 'Assistant to the CTO',
    location: 'Dushanbe, Tajikistan',
  },
];
