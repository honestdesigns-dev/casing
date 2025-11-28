import { useState, useEffect } from 'react';
import LiquidEther from './LiquidEther';
import profile from '../assets/profile1.png';
import ae from '../assets/ae.png';
import pr from '../assets/pr.png';
import ps from '../assets/ps.png';
import ai from '../assets/ai.png';
import rush from '../assets/rush.png';
import xd from '../assets/xd.png';
import fig from '../assets/fig.png';
import creatie from '../assets/creatie.png';
import spline from '../assets/spline.png';
import blender from '../assets/blender.png';
import react from '../assets/react.svg';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';

function Hero() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const fullText = 'UIUX Designer';
    const typingSpeed = 100;
    const deletingSpeed = 100;
    const pauseTime = 1000;

    useEffect(() => {
        let timer;
        if (isDeleting) {
            if (text.length > 0) {
                timer = setTimeout(() => {
                    setText(fullText.substring(0, text.length - 1));
                }, deletingSpeed);
            } else {
                setIsDeleting(false);
            }
        } else {
            if (text.length < fullText.length) {
                timer = setTimeout(() => {
                    setText(fullText.substring(0, text.length + 1));
                }, typingSpeed);
            } else {
                timer = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseTime);
            }
        }
        return () => clearTimeout(timer);
    }, [text, isDeleting]);

    return (
        <div className="relative p-4 rounded-md bg-white w-full min-h-[350px] overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 -z 10">
                <LiquidEther
                    colors={["#e9ecef", "#dee2e6", "#f8f9fa"]}
                    mouseForce={20}
                    cursorSize={100}
                    resolution={0.5}
                    autoDemo={true}
                    autoIntensity={2.2}
                />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[350px]">
                <img src={profile} alt="profile" className="w-64 mx-auto mb-4" />

                <h1 className="text-6xl font-bold text-center">
                    Honestraj
                </h1>

                <h6 className="text-2xl font-mono mt-4 border-r-4 border-black animate-pulse pr-2">
                    {text}
                </h6>
            </div>
        </div>
    );
}

export default Hero;
