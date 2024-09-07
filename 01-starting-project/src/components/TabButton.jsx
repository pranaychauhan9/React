// export default function TabButton(props){
//     // document.querySelector('button').addEventListener('click',()=>)
//    function handleClick(){
//     console.log("Hello World");
//    }

//     return <li><button onClick={handleClick}>{props.children}</button></li>
// }


//destructring
// export default function TabButton({children,onSelect,isSelected}){

//     return (
//       <li>
//         <button
//           className={isSelected ? 'active' : undefined}
//           onClick={onSelect}
//         >
//           {children}
//         </button>
//       </li>
//     );

// }


//Adavanced Version we don't set select to on click

export default function TabButton({children,isSelected,...props}){

  return (
    <li>
      <button
        className={isSelected ? 'active' : undefined }
        {...props}
      >
        {children}
      </button>
    </li>
  );

}
//alternative attru=ibutes like labele
// export default function TabButton(label){
//     return <li><button>{label}</button></li>
// }
