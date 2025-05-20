// import { useEffect, useState } from 'react';

// function DelayedLoader({ children }) {
//     const [show, setShow] = useState(false);

//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setShow(true);
//         }, 1000); // 1 second delay
//         return () => clearTimeout(timeout);
//     }, []);

//     return show ? children : (
//         <div className="min-h-screen flex items-center justify-center bg-white">
//             <div className="text-2xl font-semibold text-emerald-700 animate-pulse">
//                 Loading...
//             </div>
//         </div>
//     );
// }

// export default DelayedLoader;

// import DesignerLogoLoader from './logo';

// function App() {
//   return (
//     <div>
//       <DesignerLogoLoader />
//       {/* Your app or page content */}
//     </div>
//   );
// }
// export default App;
import React, { useState } from 'react';
import DesignerLogoLoader from './logo';
import SeeOrder from '../pages/SeeOrder';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <DesignerLogoLoader onLoaded={() => setLoading(false)} />
      ) : (
        <SeeOrder />
        
      )}
    </>
  );
}
