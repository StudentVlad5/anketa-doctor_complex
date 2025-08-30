import s from "./index.module.scss";
import { SecondSection } from "../../components/Stroke/SecondSection/secondSection";
import { useEffect } from "react";

export const SecondPage = ({ pointId }: { pointId: string }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={s.SecondPage}>
      {pointId === "stroke" && <SecondSection />}
    </div>
  );
};
