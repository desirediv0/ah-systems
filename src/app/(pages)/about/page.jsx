"use client";
import React, { useEffect } from 'react'
import Company from './_components/company'
import Vision from './_components/vision'
import Industries from './_components/industries'


const AboutPage = () => {
    useEffect(() => {
        // Get the hash from the URL
        const hash = window.location.hash;
        if (hash) {
            // Wait for page to load
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, []);
    return (
        <div>
            <Company />
            <Vision />
            <Industries />
        </div>
    )
}

export default AboutPage
