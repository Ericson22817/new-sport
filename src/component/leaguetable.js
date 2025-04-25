'use client';

import { useState } from 'react';

const tabs = [
  { name: 'Top Scorer', id: 'scorers' },
];

const players = [
  { name: 'Pablo Gomez', position: 'Attacking Midfielder (CAM)', played: 35, cleanSheets: 27, img: '/player1.jpg' },
  { name: 'Alexandre Dupont', position: 'Full-Back (LB)', played: 35, cleanSheets: 27, img: '/player2.jpg' },
  { name: 'John Doe', position: 'Central Midfielder (CM)', played: 24, cleanSheets: 17, img: '/player3.png' },
  { name: "Liam O'Connor", position: 'Striker (ST)', played: 24, cleanSheets: 17, img: '/player4.jpg' },
  { name: 'Rui Costa', position: 'Striker (ST)', played: 24, cleanSheets: 17, img: '/player5.jpg' },
];

const LeagueTable = () => {
    const [activeTab, setActiveTab] = useState('clean-sheets');
    return (
        <section className="w-full max-w-full p-6 md:p-12  ">
            <h3 className="text-red-500 uppercase font-semibold tracking-wider justify-center flex">
            Table
          </h3>
            <h2 className="text-3xl font-bold text-center mb-4 text-black">League Table & Schedule</h2>
        
        
            <div className="flex justify-center items-center space-x-4 mb-6">
                <button className='bg-red-600 text-white max-sm:text-sm hover:bg-black px-6 py-2 tracking-wider font-bold mt-4 w-60 h-15 mx-80'>TOP SCORER</button>
            </div>
        
      
            <div className="w-full bg-white text-black shadow-lg ">
                <table className="w-full text-left">
                    <thead className="bg-red-600 text-white">
                        <tr>
                            <th className="p-3">Player</th>
                            <th className="p-3">Position</th>
                            <th className="p-3">Played</th>
                            <th className="p-3">Clean Sheets</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map(player => (
                            <tr key={player.name} className="border-b">
                                <td className="p-3 flex items-center">
                                    <img src={player.img} alt={player.name} className="w-25 h-25 object-cover" />
                                </td>
                                <td className="p-3">{player.position}</td>
                                <td className="p-3">{player.played}</td>
                                <td className="p-3">{player.cleanSheets}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default LeagueTable;

