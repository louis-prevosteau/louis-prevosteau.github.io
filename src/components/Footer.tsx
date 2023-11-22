import React from 'react';

const Footer = () => {
    return (
        <footer className="mb-10 px-4 text-center text-blue-500">
            <small className="mb-2 block text-xs">
            &copy;  {new Date().getFullYear()} Louis Prevosteau Tous droits réservés.
            </small>
        </footer>
    );
};

export default Footer;