import React from "react";
import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://movie-listing-1.onrender.com/api/movie/"
        );

        if (!res.ok) {
          throw new Error(`Something went wrong ${res.status}`);
        }

        const data = await res.json();

        setData(data?.data?.movies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      {loading && !error && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div className="flex flex-col justify-center items-center p-4 gap-4 flex-wrap">
        <h1 className="text-2xl text-gray-800 font-semibold tracking-wide underline underline-offset-2 ">
          Movie Listing App
        </h1>

        <div className="flex justify-center flex-wrap gap-4 p-2">
          {data &&
            data.map((item, idx) => {
              return (
                <Card
                  key={idx}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  genre={item.genre}
                  rating={item.rating}
                />
              );
            })}
        </div>
      </div>
    </main>
  );
}
