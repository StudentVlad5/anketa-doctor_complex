import s from "./index.module.scss";
import { Title } from "../../../ui/Title";
import { useEffect, useState } from "react";
import {
  useAppSelector,
  useThunks,
} from "../../../../common/helpers/reduxHook";
import { QuizThunks } from "../../../../store/thunks/quiz.thunks";
import { QuizState } from "../../../../store/reducers/quiz.reducer";
import { RadioButtonTrue } from "../../../ui/RadioButtonWithoutSpan";
import { Button } from "../../../ui/Button";
import BodyModal from "./bodyModal";

export const ThirdSectionBurns = () => {
  const { addQuizAnswerThunk } = useThunks(QuizThunks);
  const { quizList } = useAppSelector(QuizState);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (quizList) {
    }
  }, [quizList]);

  const onBlurHandler = (name: string, value: any) => {
    addQuizAnswerThunk({
      params: {
        [name]: value,
      },
    });
  };

  function validate(evt: any) {
    const theEvent = evt || window.event;
    const key = theEvent.keyCode || theEvent.which;
    const keyChar = String.fromCharCode(key);
    const regex = /[0-9]|\.|,/;
    if (!regex.test(keyChar)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  return (
    <div className={s.SecondSection}>
      <Title>Раздел 2: Соберите следующую информацию</Title>
      <div className={s.container}>
        <div className={s.whiteBox}>
          <div className={s.field}>
            <h2 className={s.title}>Площадь поражения</h2>
            <Button onClick={() => setIsOpen(true)}>Выбрать</Button>
            {isOpen && (
              <BodyModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSave={() => {
                  console.log("save");
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
