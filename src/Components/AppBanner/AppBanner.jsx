import { useState, useEffect } from 'react';
import shareitageImage from '../../Images/share-itage-screen-shot.png';
import bearCreekImage from '../../Images/bear-creek-screenshot.png';
import feedbackLoopImage from '../../Images/feedback-loop-screenshot.png';
import photoGramImage from '../../Images/photo-gallery-screenshot.png';
import movieSelectorImage from '../../Images/movie-selector-screenshot.png';
import calcImage from '../../Images/calcs-screenshot.png';
import toDoImage from '../../Images/todo-screenshot.png';

import './AppBanner.css';

const AppBanner = () => {
    const [appIndex, setAppIndex] = useState(1);
    const photos = [
        bearCreekImage,
        calcImage,
        feedbackLoopImage,
        movieSelectorImage,
        photoGramImage,
        shareitageImage,
        toDoImage
    ];
    
    const appData = [
        { 
            id: 1,
            name: 'Share-Itage',
            img: photos[0],
            description: 'Share-Itage allows you and your loved ones to share and interact with your family recipes',
            github: 'https://github.com/bryanhighhill/Share-Itage-App'
        },
        { 
            id: 2,
            name: 'Bear Creek Lodge',
            img: photos[1],
            description: 'Bookkeeping app to help manage bookings at a rental property',
            github: 'https://bryanhighhill.com/software%20portfolio/PDFs/Bear_Creek_Lodge_documentation.pdf?'
        },
        { 
            id: 3,
            name: 'Feedback Loop',
            img: photos[2],
            description: 'App that allows students to rate their progress and submit feedback to instructors after weekly lessons',
            github: 'https://github.com/bryanhighhill/weekend-redux-feedback-loop'
        },
        { 
            id: 4,
            name: 'PhotoGram',
            img: photos[3],
            description: 'Photo app that allows users to add their photos and interact with them',
            github: 'https://github.com/bryanhighhill/weekend-react-gallery'
        },
        { 
            id: 5,
            name: 'Movie Selector',
            img: photos[4],
            description: 'App to keep track of your movie collection, the movie genres, and descriptions',
            github: 'https://github.com/bryanhighhill/weekend-movie-sagas'
        },
        { 
            id: 6,
            name: 'Server-Side Calculators',
            img: photos[5],
            description: 'Server-side calculators',
            github: 'https://github.com/bryanhighhill/weekend-jquery-server-calculator'
        },
        { 
            id: 7,
            name: 'To-Do Task App',
            img: photos[6],
            description: 'App to keep track of your to-do list and the task status',
            github: 'https://github.com/bryanhighhill/weekend-sql-to-do-list'
        },
    ];

    const nextIndex = appIndex == appData.length - 1 ? 0 : appIndex + 1;
    const previousIndex = appIndex === 0 ? appData.length - 1 : appIndex - 1;

    const app = appData[appIndex];
    const nextApp = appData[nextIndex];
    const prevApp = appData[previousIndex];

    return (
        <div className="app-list-border">
            <br />
            <p className="apps-header">Apps I've Built</p>
            <p className="instructions">* navigate using the arrow buttons below, hover over the app for a synopsis, and click through to see it on Github</p>
            <div className="app-list">
                <div className="app-div">
                    <a href={prevApp.github} target="_blank">
                        <img 
                            className="image"
                            src={prevApp.img} 
                            alt={prevApp.name}
                        />
                        <div className="overlay">
                                <div className="app-title">{prevApp.name}</div>
                                <div className="description">{prevApp.description}</div>
                        </div>
                    </a>
                </div>

                <div className="app-div">
                    <a href={app.github} target="_blank">
                        <img 
                            className="image"
                            src={app.img} 
                            alt={app.name}
                        />
                        <div className="overlay">
                                <div className="app-title">{app.name}</div>
                                <div className="description">{app.description}</div>
                        </div>
                    </a>
                </div>

                <div className="app-div">
                    <a href={nextApp.github} target="_blank">
                        <img 
                            className="image"
                            src={nextApp.img} 
                            alt={nextApp.name}
                        />
                        <div className="overlay">
                                <div className="app-title">{nextApp.name}</div>
                                <div className="description">{nextApp.description}</div>
                        </div>
                    </a>
                </div>
                {/* {appData.map((app, index) =>
                    <div className="app-div">
                        <a href={app.github} target="_blank">
                            <img 
                                // className={imageHover ? "app-icon-hover" : "app-icon"} 
                                className="image"
                                src={appData[index].img} 
                                alt={app.name}
                            />
                            <div className="overlay">
                                    <div className="app-title">{app.name}</div>
                                    <div className="description">{app.description}</div>
                            </div>
                        </a>
                    </div>
                )} */}
            </div>
            <button onClick={() => setAppIndex(previousIndex)} className="prev-nav-btn">⇦</button>
            <button onClick={() => setAppIndex(nextIndex)} className="next-nav-btn">⇨</button>
        </div>
    );
  }
  
  export default AppBanner;