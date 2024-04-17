import type { Slide } from './slider'

import shukhrat from '@public/images/owners/shukhrat.jpg'
import barzu from '@public/images/owners/barzu.jpg'

export const owners: Slide[] = [
    {
        image: shukhrat,
        about: "<p>Many years ago, when I was in Europe, one of my friends showed me a similar application. Almost everyone in Europe uses the same way of ride sharing and saves on their trip costs.</p><p>When I used it for the first time, I realized how comfortable, safe, and affordable ride sharing can be. A couple of years ago, I moved to the USA and was surprised to see people driving to another city or state alone with empty seats in their cars and not sharing their expenses and costs on high gas prices and tolls with others who need to go to the same place. It's also complicated for people without cars to travel to other cities and states, and there aren't many public transportations with affordable prices and comfortable departure times.</p><p>This inspired me to create an app that connects drivers and passengers who plan to go to the same place and makes it easy for them. I contacted my cousin, Barzu Rustami, who is a software developer, and discussed my idea with him. He agreed to help me with my idea. This app gives everyone in the USA the opportunity to make their trips more comfortable, easy, and profitable. I believe iZZi RIDE app will help others save on their trips and make them more comfortable.</p>",
        name: 'Safarov Shukhrat',
        position: 'Founder',
    },
    {
        image: barzu,
        about: '',
        name: 'Rustami Barzu',
        position: 'Co-founder',
    },
    // {
    //     image: 'image',
    //     about: '<p>When I was in Europe, I used a similar application that is very comfortable and safe for moving around cities, which inspired me to create one in America</p><p>I want the residents of America to also have such an opportunity as to make their trips comfortable and profitable.</p>',
    //     name: 'name 3',
    //     position: 'position',
    // },
]
