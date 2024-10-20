import React from 'react'

const SocialLink = ({ isActive }) => {
    return (
        <div>
            <svg viewBox="0 0 24 24" width={24} height={24} xmlns="http://www.w3.org/2000/svg">
                <path d="m0 0h24v24h-24z" fill='none' />
                <path fill={isActive === "LinkedAccounts" ? "#a3e635" : "#000"} d="m13.06 8.11 1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1 -9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011-1.414-1.414a5 5 0 1 0 -7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z" />
            </svg>
        </div>
    )
}

export default SocialLink