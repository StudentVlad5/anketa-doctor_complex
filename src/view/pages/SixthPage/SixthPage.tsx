import s from "./index.module.scss";
import { useEffect } from "react";
import { SixthSectionPregnance } from "../../components/Pregnance/SixthSection/sixthSection";

export const SixthPage = ({ pointId }: { pointId: string }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={s.SixthPage}>
      {pointId === "pregnancy" && <SixthSectionPregnance />}
    </div>
  );
};
