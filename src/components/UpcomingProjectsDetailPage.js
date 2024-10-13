import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import UpcomingIcon from '../img/upcoming-events.png';

const DetailPage = () => {
    const { id } = useParams(); // Hämta id från URL
    const location = useLocation(); // Hämta URL och query params

    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');
    const description = queryParams.get('description');

    return (
        <Link className="segment-container" to="/UpcomingProjects">
            <div className="segment upcomingProjectsSegment">
                <div className="icon-container">
                    <img src={UpcomingIcon} className="profile" alt="profile" />
                </div>
            </div>
            <div className="segment project-details-background">
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