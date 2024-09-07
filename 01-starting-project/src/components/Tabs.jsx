// export default function Tabs({children,button,buttonContainer}){
//     const ButtonContainer = buttonContainer
//     return (
// <>
//     <ButtonContainer>{button} </ButtonContainer>
//      {children}
// </>
   
 
//     );
// }    

// for defalut if there is only one section 

export default function Tabs({children,button,ButtonContainer="menu"}){
    // const ButtonContainer = buttonContainer
    return (
<>
    <ButtonContainer>{button} </ButtonContainer>
     {children}
</>
   
 
    );
}    