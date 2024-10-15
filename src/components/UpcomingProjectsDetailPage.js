import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import UpcomingIcon from '../img/upcoming-events.png';

const DetailPage = () => {
    const location = useLocation(); // Hämta URL och query params

    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');
    const description = queryParams.get('description');

    return (
        <Link className="" to="/UpcomingProjects">
            <div className="segment upcomingProjectsSegment-inpage">
                <div className="icon-container">
                    <img src={UpcomingIcon} className="profile" alt="profile" />
                </div>
            </div>
            <div className="segment-upcoming project-details-background">
                {name ? (
                    <>
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </>
                ) : (
                    <h1>Projektet hittades inte!</h1>
                )}
            </div>
        </Link>
    );
};

export default DetailPage;
