import s from "./index.module.scss";
import { FourthSection } from "../../components/Stroke/FourthSection";
import { useEffect } from "react";

export const FourthPage = ({ pointId }: { pointId: string }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={s.FourthPage}>
      {pointId === "stroke" && <FourthSection />}
    </div>
  );
};
