import React from 'react'

const Share = ({ isActive }) => {
  return (
    <div>
      <svg fill="none" height="24" viewBox="0 0 20 20" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="m12 5.50151c0-1.38155 1.12-2.50151 2.5015-2.50151 1.3816 0 2.5015 1.11996 2.5015 2.50151 0 1.38154-1.1199 2.50151-2.5015 2.50151-.8 0-1.5123-.37553-1.9702-.95992l-4.61629 2.30817c.05543.20689.08499.42436.08499.64873 0 .2243-.02953.4417-.08492.6485l4.61762 2.3088c.4576-.5829 1.1687-.9573 1.9673-.9573 1.3807 0 2.5 1.1193 2.5 2.5s-1.1193 2.5-2.5 2.5-2.5-1.1193-2.5-2.5c0-.2243.0295-.4417.0849-.6486l-4.61748-2.3087c-.45769.5829-1.16883.9573-1.96742.9573-1.38071 0-2.5-1.1193-2.5-2.5 0-1.38071 1.11929-2.5 2.5-2.5.79849 0 1.50955.37435 1.96725.95712l4.61725-2.30862c-.0551-.20637-.0845-.42325-.0845-.64699zm2.5015-1.50151c-.8293 0-1.5015.67225-1.5015 1.50151s.6722 1.50151 1.5015 1.50151 1.5015-.67225 1.5015-1.50151-.6722-1.50151-1.5015-1.50151zm-.0015 9c-.8284 0-1.5.6716-1.5 1.5s.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5zm-10.5-3c0 .8284.67157 1.5 1.5 1.5s1.5-.6716 1.5-1.5c0-.82843-.67157-1.5-1.5-1.5s-1.5.67157-1.5 1.5z" fill={isActive === "ProfileVisibility" ? "#a3e635" : "#000"} />
      </svg>
    </div>
  )
}

export default Share