import { icon } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import { Categorycard } from './Categorycard';

import { FaSeedling, FaTree } from 'react-icons/fa';
import { MdLocalFlorist } from 'react-icons/md'; // since FaFlower doesn't exist


const cardsData = [
  { icon: <FaSeedling size={40} color='green'/>, title: 'Plants', description: 'Indoor & Outdoor Plants for every space' },
  { icon: <FaTree size={40} color='green' />, title: 'Trees', description: 'Large & small trees for gardens' },
  { icon: <FaSeedling size={40} color='green'/>, title: 'Plants', description: 'Indoor & Outdoor Plants for every space' },
  { icon: <FaTree size={40} color='green' />, title: 'Trees', description: 'Large & small trees for gardens' },
];

export const Category = () => {
  return (
   <div className="flex gap-32 flex-wrap pb-10 justify-center items-center  text-black">
      {cardsData.map((card, idx) => (
        <Categorycard key={idx} icon={card.icon} title={card.title} description={card.description}/>
      ))}
    </div>
  )
}
