import { Rovers } from "../../Constants/Constans";
import RoverCard from "../RoverCard/RoverCard";
import style from "./RoversContainer.module.css";
import { useState, useEffect, useLayoutEffect } from "react";
import Secondary from "../Title/Secondary/Secondary";
import SearchButton from "../Button/Search/Search";
import curiosityInfoService from "../../Api/Rovers/Curiosity/CuriosityService";
import spiritInfoService from "../../Api/Rovers/Spirit/SpiritService";
import opportunityInfoService from "../../Api/Rovers/Opportunity/OpportunityService";
import Error from "../Message/Error/Error";

const RoversContainer = () => {
  const roversAvailable = Rovers;
  const [roverSelected, setRoverSelected] = useState("");
  const [roverEmpty, setRoverEmpty] = useState(false);

  useLayoutEffect(() => {
    (async () => {
      switch (roverSelected.toLowerCase()) {
        case "opportunity":
          await opportunityInfoService.getRoverInfo().then((a) => {
            console.log(a);
          });
          break;
        case "spirit":
          await spiritInfoService.getRoverInfo().then((a) => {
            console.log(a);
          });
          break;
        case "curiosity":
          await curiosityInfoService.getRoverInfo().then((a) => {
            console.log(a);
          });
          break;
      }
    })();
  }, [roverSelected]);

  useEffect(() => {
    (async () => {
      opportunityInfoService.getRoverInfo().then((a) => {
        console.log(a);
      });
    })();
  }, [roverEmpty]);

  const clickSelecRover = (event) => {
    setRoverSelected(event.target.attributes.customname.value);
  };

  const searchClick = () => {
    console.log("sssssssssssssss");
    setRoverEmpty(!roverEmpty);
  };

  return (
    <div>
      <Secondary title="Pick a drone!" />
      <div className={style.container}>
        {roversAvailable.map((rover) => {
          return (
            <RoverCard
              key={rover.id}
              roverName={rover.name}
              roverPicturePath={rover.picturePath}
              selectRover={clickSelecRover}
              roverSelected={roverSelected}
            />
          );
        })}
      </div>
      <div>
        <SearchButton title={"Rover Pictures"} click={searchClick} />
        {roverEmpty && (
          <Error message={"Must pick a Rover to retrieve pictures"}></Error>
        )}
      </div>
    </div>
  );
};

export default RoversContainer;
