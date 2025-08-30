import { useEffect } from "react";
import { SecondSectionStroke } from "../../components/Stroke/SecondSection/secondSection";
import { SecondSectionPregnance } from "../../components/Pregnance/SecondSection/secondSection";
import s from "./index.module.scss";

export const SecondPage = ({ pointId }: { pointId: string }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={s.SecondPage}>
      {pointId === "stroke" && <SecondSectionStroke />}
      {pointId === "pregnancy" && <SecondSectionPregnance />}
    </div>
  );
};
