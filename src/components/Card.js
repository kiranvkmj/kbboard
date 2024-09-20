// import React from 'react';

// const Card = ({ ticket }) => {
//   return (
//     <div className="card">
//       <h3>{ticket.title}</h3>
//       {/* Add more ticket details here */}
//     </div>
//   );
// };

// export default Card;

import React from 'react';
// import './Card.css';

const Card = ({ ticket }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <img 
          src={ticket.userAvatar} 
          alt={ticket.userName} 
          className="user-avatar" 
        />
      </div>
      <h3 className="card-title">{ticket.title}</h3>
      <div className="card-footer">
        <span className="priority-icon">
          {/* Priority icon based on ticket.priority */}
        </span>
        <span className="feature-tag">
          {/* Feature tag icon */}
          Feature Request
        </span>
      </div>
    </div>
  );
};

export default Card;