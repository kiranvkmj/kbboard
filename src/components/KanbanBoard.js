// // import React from 'react';

// // const KanbanBoard = ({ tickets, users, grouping, sortOption }) => {
// //   // Helper function to get the user name based on userId
// //   const getUserName = (userId) => {
// //     const user = users.find((user) => user.id === userId);
// //     return user ? user.name : 'Unknown User';
// //   };

// //   // Function to group tickets based on the grouping option
// //   const groupTickets = () => {
// //     switch (grouping) {
// //       case 'status':
// //         return tickets.reduce((groups, ticket) => {
// //           const group = groups[ticket.status] || [];
// //           return { ...groups, [ticket.status]: [...group, ticket] };
// //         }, {});
// //       case 'user':
// //         return tickets.reduce((groups, ticket) => {
// //           const userName = getUserName(ticket.userId);
// //           const group = groups[userName] || [];
// //           return { ...groups, [userName]: [...group, ticket] };
// //         }, {});
// //       case 'priority':
// //         return tickets.reduce((groups, ticket) => {
// //           const group = groups[ticket.priority] || [];
// //           return { ...groups, [ticket.priority]: [...group, ticket] };
// //         }, {});
// //       default:
// //         return {};
// //     }
// //   };

// //   // Sort tickets based on the selected sorting option
// //   const sortTickets = (tickets) => {
// //     if (sortOption === 'priority') {
// //       return tickets.sort((a, b) => b.priority - a.priority);
// //     } else if (sortOption === 'title') {
// //       return tickets.sort((a, b) => a.title.localeCompare(b.title));
// //     }
// //     return tickets;
// //   };

// //   const groupedTickets = groupTickets();

// //   return (
// //     <div className="kanban-board">
// //       {Object.keys(groupedTickets).map((group) => (
// //         <div className="kanban-column" key={group}>
// //           <h2>{group}</h2>
// //           {sortTickets(groupedTickets[group]).map((ticket) => (
// //             <div className="ticket-card" key={ticket.id}>
// //               <h3>{ticket.title}</h3>
// //               <p>Priority: {ticket.priority}</p>
// //               <p>User: {getUserName(ticket.userId)}</p>
// //               {/* You can add the priority icons here */}
// //             </div>
// //           ))}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default KanbanBoard;   




// import React from 'react';

// const KanbanBoard = ({ tickets, users, grouping, sortOption }) => {
//   // Helper function to get the user name based on userId
//   const getUserName = (userId) => {
//     const user = users.find((user) => user.id === userId);
//     return user ? user.name : 'Unknown User';
//   };

//   // Function to group tickets based on the grouping option
//   const groupTickets = () => {
//     switch (grouping) {
//       case 'status':
//         return tickets.reduce((groups, ticket) => {
//           const group = groups[ticket.status] || [];
//           return { ...groups, [ticket.status]: [...group, ticket] };
//         }, {});
//       case 'user':
//         return tickets.reduce((groups, ticket) => {
//           const userName = getUserName(ticket.userId);
//           const group = groups[userName] || [];
//           return { ...groups, [userName]: [...group, ticket] };
//         }, {});
//       case 'priority':
//         return tickets.reduce((groups, ticket) => {
//           const group = groups[ticket.priority] || [];
//           return { ...groups, [ticket.priority]: [...group, ticket] };
//         }, {});
//       default:
//         return {};
//     }
//   };

//   // Sort tickets based on the selected sorting option
//   const sortTickets = (tickets) => {
//     if (sortOption === 'priority') {
//       return tickets.sort((a, b) => b.priority - a.priority);
//     } else if (sortOption === 'title') {
//       return tickets.sort((a, b) => a.title.localeCompare(b.title));
//     }
//     return tickets;
//   };

//   const groupedTickets = groupTickets();

//   return (
//     <div className="kanban-board">
//       {Object.keys(groupedTickets).map((group) => (
//         <div className="kanban-column" key={group}>
//           <h2>{group}</h2>
//           {sortTickets(groupedTickets[group]).map((ticket) => (
//             <div className="ticket-card" key={ticket.id}>
//               <h3>{ticket.title}</h3>
//               <p>Priority: {ticket.priority}</p>
//               <p>User: {getUserName(ticket.userId)}</p>
//               {/* You can add the priority icons here */}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default KanbanBoard;   


import React from 'react';
import TicketCard from './TicketCard';  // Import TicketCard component

const KanbanBoard = ({ tickets, users, grouping, sortOption }) => {
  // Helper function to get the user name based on userId
  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : 'Unknown User';
  };

  // Function to group tickets based on the grouping option
  const groupTickets = () => {
    switch (grouping) {
      case 'status':
        return tickets.reduce((groups, ticket) => {
          const group = groups[ticket.status] || [];
          return { ...groups, [ticket.status]: [...group, ticket] };
        }, {});
      case 'user':
        return tickets.reduce((groups, ticket) => {
          const userName = getUserName(ticket.userId);
          const group = groups[userName] || [];
          return { ...groups, [userName]: [...group, ticket] };
        }, {});
      case 'priority':
        return tickets.reduce((groups, ticket) => {
          const group = groups[ticket.priority] || [];
          return { ...groups, [ticket.priority]: [...group, ticket] };
        }, {});
      default:
        return {};
    }
  };

  // Sort tickets based on the selected sorting option
  const sortTickets = (tickets) => {
    if (sortOption === 'priority') {
      return tickets.sort((a, b) => b.priority - a.priority);
    } else if (sortOption === 'title') {
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
  };

  const groupedTickets = groupTickets();

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <div className="kanban-column" key={group}>
          <h2>{group}</h2>
          {sortTickets(groupedTickets[group]).map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              userName={getUserName(ticket.userId)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
