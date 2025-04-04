import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

// Dynamically import Carte with SSR disabled
const Carte = dynamic(() => import('./component/Carte'), {
  ssr: false,
});

export default function Home() {
    const [annee, setAnnee] = useState([]);
    useEffect(() => {
        const dateFin = new Date().getFullYear();
        const dateDebut = 1900;
        const annees= [];
        for (let i = dateFin; i >= dateDebut; i--) {
            annees.push(i);
        }
        setAnnee(annees);
    }, []);

    return (
        <>
        <div className="bg-gray-950 min-h-screen flex flex-col items-center justify-center space-y-4 p-4 ">
            <div className="text-white text-2xl font-bold space-x-4">
                <input
                    type="text"
                    placeholder="Recherche..."
                    className="p-2 rounded border border-gray-950"/>
                <select className="p-2 rounded border border-gray-950">
                    {annee.map((annee) => (
                        <option key={annee} value={annee}>{annee}</option>
                    ))}
                </select>
            </div>
            
            <Carte />
        </div>
        </>
    );
}