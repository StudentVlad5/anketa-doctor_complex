import { useEffect } from "react";
import s from "./index.module.scss";
import { FourthSectionStroke } from "../../components/Stroke/FourthSection/fourthSection";
import { FourthSectionPregnance } from "../../components/Pregnance/FourthSection/fourthSection";

export const FourthPage = ({ pointId }: { pointId: string }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={s.FourthPage}>
      {pointId === "stroke" && <FourthSectionStroke />}
      {pointId === "pregnancy" && <FourthSectionPregnance />}
    </div>
  );
};
