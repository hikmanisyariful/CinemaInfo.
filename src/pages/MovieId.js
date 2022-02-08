import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieId() {
  const params = useParams();

  useEffect(() => {}, []);
  return (
    <div style={{ marginTop: 100 }}>
      <h1>{params.movieId}</h1>
    </div>
  );
}
