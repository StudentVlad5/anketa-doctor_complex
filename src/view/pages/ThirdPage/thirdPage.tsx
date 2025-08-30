import s from "./index.module.scss";
import { ThirdSection } from "../../components/Stroke/ThirdSection";
import { useEffect } from "react";

export const ThirdPage = ({ pointId }: { pointId: string }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={s.ThirdPage}>
      {pointId === "stroke" && <ThirdSection />}
    </div>
  );
};
