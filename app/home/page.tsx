import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to BibleMap Explorer!</h1>
      <p className="text-lg mb-6">
        Click on a location to explore biblical events, places, and characters.
      </p>
      {/* Mock Interactive Map */}
      <div className="border-2 border-gray-400 rounded-lg w-full max-w-md p-4">
        <h2 className="text-xl font-semibold mb-2">Interactive Map</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Example Locations */}
          <Link href="/places">
            <div className="bg-green-300 p-2 rounded cursor-pointer hover:bg-green-400">
              Place 1
            </div>
          </Link>
          <Link href="/characters">
            <div className="bg-blue-300 p-2 rounded cursor-pointer hover:bg-blue-400">
              Character 1
            </div>
          </Link>
          <Link href="/events">
            <div className="bg-red-300 p-2 rounded cursor-pointer hover:bg-red-400">
              Event 1
            </div>
          </Link>
          {/* Add more locations as needed */}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
