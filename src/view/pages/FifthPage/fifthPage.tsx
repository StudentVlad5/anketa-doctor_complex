import s from "./index.module.scss";
import { FifthSection } from "../../components/Stroke/FifthSection";
import { useEffect } from "react";

export const FifthPage = ({ pointId }: { pointId: string }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={s.FifthPage}>
      {pointId === "stroke" && <FifthSection />}
    </div>
  );
};
