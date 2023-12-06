import React from "react";
import InfoCard from "../../components/InfoCard";
import athletes from "./athletes.json";
import MainTitle from "../../components/MainTitle";

const AthletesModule = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <MainTitle>{athletes.mainTopic}</MainTitle>
      {athletes.steps.map(
        ({ number, title, desc, background, underlineColor, descColor }) => (
          <>
            <InfoCard
              number={number}
              title={title}
              desc={desc}
              background={background}
              underlineColor={underlineColor}
              descColor={descColor}
            />
          </>
        )
      )}
    </div>
  );
};

export default AthletesModule;
