// import { useState, useEffect } from 'react';

// const useCheckScreen = () => {
//   const [screenSize, setScreenSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });
//   const [isBrowser, setIsBrowser] = useState(undefined);

//   useEffect(() => {
//     const handleResize = () => {
//       setScreenSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     window.addEventListener('resize', handleResize);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   if(screenSize.width < 600){
//     setIsBrowser(false);
//     console.log("entered if condition");
//   }
//   console.log("Broser", isBrowser)
//   return isBrowser;
// };

// export default useCheckScreen;