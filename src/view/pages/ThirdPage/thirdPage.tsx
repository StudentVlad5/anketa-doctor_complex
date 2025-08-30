import { useEffect } from "react";
import s from "./index.module.scss";
import { ThirdSectionStroke } from "../../components/Stroke/ThirdSection/thirdSection";
import { ThirdSectionPregnance } from "../../components/Pregnance/ThirdSection/thirdSection";

export const ThirdPage = ({ pointId }: { pointId: string }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={s.ThirdPage}>
      {pointId === "stroke" && <ThirdSectionStroke />}
      {pointId === "pregnancy" && <ThirdSectionPregnance />}
    </div>
  );
};
