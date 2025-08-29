import { useState } from "react";
import { listOfPoints } from "../../../common/config";
import { RadioButton } from "../../ui/RadioButton";

import s from "./index.module.scss";
import { useThunks } from "../../../common/helpers/reduxHook";
import { QuizThunks } from "../../../store/thunks/quiz.thunks";

const ListOfPoints = ({
  setContainerColor,
}: {
  setContainerColor: (color: string) => void;
}) => {
  const [pointOfCase, setPointOfCase] = useState("");
  console.log("pointOfCase", pointOfCase);
  const { addQuizAnswerThunk } = useThunks(QuizThunks);

  const onBlurHandler = (name: string, value: any) => {
    addQuizAnswerThunk({
      params: {
        [name]: value,
      },
    });
  };

  return (
    <ul className={s.wrapListOfPoints}>
      {listOfPoints.map((it) => {
        return (
          <li key={it.id} className={"color" + it.color.slice(1)}>
            <RadioButton
              styledClassName={s.styledRB}
              id={it.id}
              value={it.case}
              onChange={(str) => {
                setPointOfCase(str);
                onBlurHandler("pointOfCase", str);
                setContainerColor(it.color);
              }}
              name={"pointOfCase"}
              currentValue={pointOfCase}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ListOfPoints;
