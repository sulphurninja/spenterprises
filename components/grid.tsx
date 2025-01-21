"use client";
import React from "react";
import { LayoutGrid } from "./layout-grid";

export function LayoutGridDemo() {
    return (
        <div className="h-screen py-20 w-full">
            <LayoutGrid cards={cards} />
        </div>
    );
}

const RailwayCard = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">Railway Bookings</p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Seamless railway ticket bookings for all major routes across India.
                Enjoy hassle-free planning, comfortable seats, and on-time services to
                make your journey memorable.
            </p>
            <p className="font-normal text-base text-neutral-200">
                Book now to explore the most scenic and convenient railway travel options.
            </p>
        </div>
    );
};

const FlightCard = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">Flight Tickets</p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Fly to your destination with ease. Book domestic and international flights
                at the best prices. Enjoy unparalleled comfort and fast travel to save time.
            </p>
            <p className="font-normal text-base text-neutral-200">
                Get ready to take off with our exclusive flight deals.
            </p>
        </div>
    );
};

const BusCard = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">Bus Tickets</p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Affordable and comfortable bus ticket bookings for city-to-city and
                long-distance travel. Choose from a wide range of operators and routes.
            </p>
            <p className="font-normal text-base text-neutral-200">
                Experience road travel like never before.
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <RailwayCard />,
        className: "md:col-span-2 object-contain",
        thumbnail:
            "/railway.jpeg",
    },
    {
        id: 2,
        content: <FlightCard />,
        className: "col-span-1",
        thumbnail:
            "/flight.jpg",
    },
    {
        id: 3,
        content: <BusCard />,
        className: "col-span-1",
        thumbnail:
            "/bus.jpg",
    },
];

