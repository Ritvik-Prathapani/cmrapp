import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Slider() {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      navigate("/selectuser");
    }, 2500);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-lg">Welcome</h1>
      </div>
    </>
  );
}
