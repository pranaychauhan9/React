import { useState } from "react";
import TabButton  from "./TabButton.jsx"
import Section from "./Section.jsx";


import { EXAMPLES } from "../data.js";
import Tabs from "./Tabs.jsx";
export  default function Examples(){
    let tableContent =<p>Please Select Topic</p>
    const [selectTopic,setSelectedTopic]=useState();
  
    if(selectTopic){
      tableContent=(
        <div id="tab-content">
          <h3>{EXAMPLES[selectTopic].title}</h3>
          <p>{EXAMPLES[selectTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectTopic].code}</code>
          </pre>
        </div>
      )
    }
   
    function handleSelect(selectedComponenets){
      // // console.log(selectedComponenets);
      // tableContebt = selectedComponenets
  
      setSelectedTopic(selectedComponenets)
    }
    return (
      <Section title="Examples" id="examples">
        <Tabs

         // buttonContainer="menu"

         //For default
          ButtonContainer="menu"
          button={
            <>
              <TabButton
                isSelected={selectTopic === "components"}
                //Mehtod for seprte props
                // onSelect={() => handleSelect("components")
                //Advanced props
                onClick={() => handleSelect("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectTopic === "jsx"}
                onClick={() => handleSelect("jsx")}
              >
                Jsx
              </TabButton>
              <TabButton
                isSelected={selectTopic === "props"}
                onClick={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectTopic === "state"}
                onClick={() => handleSelect("state")}
              >
                State
              </TabButton>

              {/* attribute Approch like label */}
              {/* <TabButton label="Components" /> */}
            </>
          }
        >
          {tableContent}
        </Tabs>
      </Section>
    );
}