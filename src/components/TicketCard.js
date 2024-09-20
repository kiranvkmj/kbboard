import React from 'react';

// Import the SVG icons from the icons folder
import { ReactComponent as HighPriorityIcon } from '../icons/Img-High-Priority.svg';
import { ReactComponent as MediumPriorityIcon } from '../icons/Img-Medium-Priority.svg';
import { ReactComponent as LowPriorityIcon } from '../icons/Img-Low-Priority.svg';
import { ReactComponent as UrgentPriorityIcon } from '../icons/SVG-Urgent-Priority-colour.svg';
import { ReactComponent as InProgressIcon } from '../icons/in-progress.svg';
import { ReactComponent as DoneIcon } from '../icons/Done.svg';

const TicketCard = ({ ticket, userName }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high':
        return <HighPriorityIcon className="priority-icon" />;
      case 'medium':
        return <MediumPriorityIcon className="priority-icon" />;
      case 'low':
        return <LowPriorityIcon className="priority-icon" />;
      case 'urgent':
        return <UrgentPriorityIcon className="priority-icon" />;
      default:
        return <div>No Priority</div>;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'in-progress':
        return <InProgressIcon className="status-icon" />;
      case 'done':
        return <DoneIcon className="status-icon" />;
      default:
        return <div>No Status</div>;
    }
  };

  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p><strong>User:</strong> {userName}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>Priority:</strong> {ticket.priority}</p>

      {/* Display priority icon */}
      {getPriorityIcon(ticket.priority)}

      {/* Display status icon */}
      {getStatusIcon(ticket.status)}
    </div>
  );
};

export default TicketCard;   

