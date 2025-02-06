"use client";
import React, { useEffect } from 'react'
import Company from './_components/company'
import Vision from './_components/vision'
import Industries from './_components/industries'


const AboutPage = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            // Remove special characters from hash
            const cleanHash = hash.replace(/[^a-zA-Z0-9-]/g, '');
            setTimeout(() => {
                const element = document.getElementById(cleanHash.substring(1));
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
