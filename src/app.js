// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import KanbanBoard from './components/KanbanBoard';

// // const App = () => {
// //   const [tickets, setTickets] = useState([]);
// //   const [users, setUsers] = useState([]);
// //   const [grouping, setGrouping] = useState('status');
// //   const [sortOption, setSortOption] = useState('priority');

// //   // Fetching tickets and users from API
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
// //         if (response.data) {
// //           setTickets(response.data.tickets);
// //           setUsers(response.data.users);
// //         }
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   return (
// //     <div className="app">
// //       <header>
// //         <h1>Kanban Board</h1>
// //         <div>
// //           <label>Group By: </label>
// //           <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
// //             <option value="status">Status</option>
// //             <option value="user">User</option>
// //             <option value="priority">Priority</option>
// //           </select>

// //           <label>Sort By: </label>
// //           <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
// //             <option value="priority">Priority</option>
// //             <option value="title">Title</option>
// //           </select>
// //         </div>
// //       </header>
// //       <KanbanBoard tickets={tickets} users={users} grouping={grouping} sortOption={sortOption} />
// //     </div>
// //   );
// // };

// // export default App;  


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import KanbanBoard from './components/KanbanBoard';


// // import { ReactComponent as DisplayIcon } from './icons/display.svg';  // Example SVG import
// const App = () => {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [grouping, setGrouping] = useState('status');
//   const [sortOption, setSortOption] = useState('priority');
//   const [dropdownOpen, setDropdownOpen] = useState(false); // For dropdown visibility

//   // Fetching tickets and users from API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
//         if (response.data) {
//           setTickets(response.data.tickets);
//           setUsers(response.data.users);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="app">
//       <header>
//         <h1>Kanban Board</h1>
//         <div className="display-dropdown">
//           {/* Display Button */}
//           <button className="display-button" onClick={() => setDropdownOpen(!dropdownOpen)}>
//             <img src="/icons/display.png" alt="Display" className="icon" />
//             Display
//           </button>

//           {dropdownOpen && (
//             <div className="dropdown-menu">
//               <div className="dropdown-section">
//                 <label>Grouping</label>
//                 <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
//                   <option value="status">Status</option>
//                   <option value="user">User</option>
//                   <option value="priority">Priority</option>
//                 </select>
//               </div>

//               <div className="dropdown-section">
//                 <label>Ordering</label>
//                 <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
//                   <option value="priority">Priority</option>
//                   <option value="title">Title</option>
//                 </select>
//               </div>
//             </div>
//           )}
//         </div>
//       </header>

//       <KanbanBoard tickets={tickets} users={users} grouping={grouping} sortOption={sortOption} />
//     </div>
//   );
// };

// export default App;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import KanbanBoard from './components/KanbanBoard';
// import TicketCard from './components/TicketCard';

// // Direct import of the SVG icons
// // import { ReactComponent as DisplayIcon } from './icons/display.svg';  // Example SVG import
// const DisplayIcon = '/icons/display.svg';

// const App = () => {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [grouping, setGrouping] = useState('status');
//   const [sortOption, setSortOption] = useState('priority');
//   const [dropdownOpen, setDropdownOpen] = useState(false); // For dropdown visibility

//   // Fetching tickets and users from API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
//         if (response.data) {
//           setTickets(response.data.tickets);
//           setUsers(response.data.users);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="app">
//       <header>
//         <h1>Kanban Board</h1>
//         <div className="display-dropdown">
//           {/* /* Display Button */}
//           {/* <button className="display-button" onClick={() => setDropdownOpen(!dropdownOpen)}> */}
//             {/* <DisplayIcon className="icon" /> Using the SVG icon as a component */}
//             {/* Display */}
//           {/* </button>  */}

          
//           <button className="display-button" onClick={() => setDropdownOpen(!dropdownOpen)}>
//   <img src={DisplayIcon} alt="kirangill" className="icon" /> {/* Using <img> tag */}
//   Display
// </button>


//           {dropdownOpen && (
//             <div className="dropdown-menu">
//               <div className="dropdown-section">
//                 <label>Grouping</label>
//                 <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
//                   <option value="status">Status</option>
//                   <option value="user">User</option>
//                   <option value="priority">Priority</option>
//                 </select>
//               </div>

//               <div className="dropdown-section">
//                 <label>Ordering</label>
//                 <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
//                   <option value="priority">Priority</option>
//                   <option value="title">Title</option>
//                 </select>
//               </div>
//             </div>
//           )}
//         </div>
//       </header>

//       <KanbanBoard tickets={tickets} users={users} grouping={grouping} sortOption={sortOption} />
//     </div>
//   );
// };

// export default App;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KanbanBoard from './components/KanbanBoard';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sortOption, setSortOption] = useState('priority');
  const [dropdownOpen, setDropdownOpen] = useState(false); // For dropdown visibility

  // Fetching tickets and users from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        if (response.data) {
          setTickets(response.data.tickets);
          setUsers(response.data.users);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Kanban Board</h1>
        <div className="display-dropdown">
          {/* Display Button */}
          <button className="display-button" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <img src="/icons/display.svg" alt="Display" className="icon" />
            Display
          </button>

          {dropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-section">
                <label>Grouping</label>
                <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>

              <div className="dropdown-section">
                <label>Ordering</label>
                <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Render KanbanBoard and pass down tickets, users, grouping, and sorting */}
      <KanbanBoard tickets={tickets} users={users} grouping={grouping} sortOption={sortOption} />
    </div>
  );
};

export default App;
