import React from "react";

const Icons = () => (
    <svg className="h-hide" xmlns="http://www.w3.org/2000/svg">
        <symbol id="hamburger-icon" viewBox="0 0 32 32">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
            />
        </symbol>

        <symbol id="cogs-icon" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M17.4,11 C17.4,10.7 17.5,10.4 17.5,10 C17.5,9.6 17.5,9.3 17.4,9 L19.5,7.3 C19.7,7.1 19.7,6.9 19.6,6.7 L17.6,3.2 C17.5,3.1 17.3,3 17,3.1 L14.5,4.1 C14,3.7 13.4,3.4 12.8,3.1 L12.4,0.5 C12.5,0.2 12.2,0 12,0 L8,0 C7.8,0 7.5,0.2 7.5,0.4 L7.1,3.1 C6.5,3.3 6,3.7 5.4,4.1 L3,3.1 C2.7,3 2.5,3.1 2.3,3.3 L0.3,6.8 C0.2,6.9 0.3,7.2 0.5,7.4 L2.6,9 C2.6,9.3 2.5,9.6 2.5,10 C2.5,10.4 2.5,10.7 2.6,11 L0.5,12.7 C0.3,12.9 0.3,13.1 0.4,13.3 L2.4,16.8 C2.5,16.9 2.7,17 3,16.9 L5.5,15.9 C6,16.3 6.6,16.6 7.2,16.9 L7.6,19.5 C7.6,19.7 7.8,19.9 8.1,19.9 L12.1,19.9 C12.3,19.9 12.6,19.7 12.6,19.5 L13,16.9 C13.6,16.6 14.2,16.3 14.7,15.9 L17.2,16.9 C17.4,17 17.7,16.9 17.8,16.7 L19.8,13.2 C19.9,13 19.9,12.7 19.7,12.6 L17.4,11 L17.4,11 Z M10,13.5 C8.1,13.5 6.5,11.9 6.5,10 C6.5,8.1 8.1,6.5 10,6.5 C11.9,6.5 13.5,8.1 13.5,10 C13.5,11.9 11.9,13.5 10,13.5 L10,13.5 Z"
            />
        </symbol>
        <symbol id="coffee-icon" viewBox="0 0 64 64">
            <rect transform="matrix(.124 -.9923 .9923 .124 -20.091 89.241)" x="36.5" y="55" width="8.1" height="2" fill="currentColor" fillRule="evenodd"/>
            <path d="m51 19h-38c-1.9 0-3-1.1-3-3v-4c0-1.9 1.1-3 3-3h2.2l0.8-4.1c0-2.4 1.5-3.9 4-3.9h24c2.4 0 4 1.5 4 3.9l0.8 4.1h2.2c1.9 0 3 1.1 3 3v4c0 1.9-1.1 3-3 3zm-38-8c-0.8 0-1 0.2-1 1v4c0 0.8 0.2 1 1 1h38c0.8 0 1-0.2 1-1v-4c0-0.8-0.2-1-1-1h-3.8l-1.2-6c0-1.3-0.7-2-2-2h-24c-1.4 0-2 0.6-2 2v0.2l-1.2 5.8h-3.8z" fill="currentColor" fillRule="evenodd"/>
            <rect x="27" y="9" width="17" height="2" fill="currentColor" fillRule="evenodd"/>
            <rect x="23" y="9" width="2" height="2" fill="currentColor" fillRule="evenodd"/>
            <rect x="19" y="9" width="2" height="2" fill="currentColor" fillRule="evenodd"/>
            <rect transform="matrix(.1646 -.9864 .9864 .1646 17.264 68.383)" x="42.9" y="23" width="12.2" height="2" fill="currentColor" fillRule="evenodd"/>
            <path d="m43 63h-22c-1.3 0-2-1-2-1.9l-2-13.9 2-0.3 2 14.1h22v-0.1l2-14 2 0.3-2 13.9c0 0.9-0.7 1.9-2 1.9z" fill="currentColor" fillRule="evenodd"/>
            <rect transform="matrix(.9904 -.1382 .1382 .9904 -3.1821 2.3281)" x="14.2" y="18" width="2" height="12.1" fill="currentColor" fillRule="evenodd"/>
            <path d="m46 48h-28c-1 0-1.9-0.8-2-1.9l-2-15c0-0.3-0.1-1 0.4-1.5 0.3-0.3 0.7-0.6 1.6-0.6h32c0.8 0 1.3 0.3 1.6 0.6 0.3 0.4 0.5 0.9 0.4 1.5l-2 15c-0.1 1.1-1 1.9-2 1.9zm-30-17l2 14.9c0 0.1 0 0.1 0.1 0.1h27.9v-0.1l2-14.9h-32z" fill="currentColor" fillRule="evenodd"/>
            <path d="m32 45c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" fill="currentColor" fillRule="evenodd"/>
        </symbol>
    </svg>
);

export default Icons;
