// utils/groupAndSort.js

export const groupTickets = (tickets, grouping) => {
    return tickets.reduce((acc, ticket) => {
      const key = grouping === 'user' ? ticket.userId :
                  grouping === 'priority' ? ticket.priority :
                  ticket.status;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(ticket);
      return acc;
    }, {});
  };
  
  export const sortTickets = (groupedTickets, sorting) => {
    const sortFunc = sorting === 'priority' ?
      (a, b) => b.priority - a.priority :
      (a, b) => a.title.localeCompare(b.title);
  
    return Object.fromEntries(
      Object.entries(groupedTickets).map(([key, tickets]) => [
        key,
        tickets.sort(sortFunc)
      ])
    );
  };