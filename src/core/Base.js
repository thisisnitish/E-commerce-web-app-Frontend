import React from 'react';
import Menu from './Menu';

const Base = ({
    title = "My Title",
    description = "My description",
    className = "text-black p-4",
    children
}) => {
    return(
        <div>
            <Menu/>
            <div className="container-fluid">
                <div className="text-dark text-center">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
                <div className={className}>
                    {children}
                </div>
            </div>
            <footer className="footer mt-auto py-3">
                <div className="container-fluid bg-dark text-white text-center py-3">
                    <h4>If you got any questions, reach me out at instagram</h4>
                    <button className="btn btn-warning btn-lg">Contact us</button>
                    <div className="container">
                        <span className="text-white">
                            An amazing Django-React combination
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Base;