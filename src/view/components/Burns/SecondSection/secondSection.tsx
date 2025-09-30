import s from "./index.module.scss";
import { Title } from "../../../ui/Title";
import { useState, useEffect } from "react";
import {
  useAppSelector,
  useThunks,
} from "../../../../common/helpers/reduxHook";
import { QuizThunks } from "../../../../store/thunks/quiz.thunks";
import { QuizState } from "../../../../store/reducers/quiz.reducer";
import { RadioButtonTrue } from "../../../ui/RadioButtonWithoutSpan";
import classNames from "classnames";
import { useOnBlurHandler } from "../../../../common/helpers/useOnBlurHandler";
import { validate } from "../../../../common/helpers/validate";

export const SecondSectionBurns = () => {
  const { addQuizAnswerThunk } = useThunks(QuizThunks);
  const { quizList } = useAppSelector(QuizState);
  const { onBlurHandler } = useOnBlurHandler({ addQuizAnswerThunk });

  const [isClearConsciousness, setIsClearConsciousness] = useState("");
  const [isStunning, setIsStunning] = useState("");
  const [isSopor, setIsSopor] = useState("");
  const [isComa, setIsComa] = useState("");

  const [isThermalBurn, setIsThermalBurn] = useState("");
  const [isChemicalBurn, setIsChemicalBurn] = useState("");
  const [isInhalationBurn, setIsInhalationBurn] = useState("");
  const [isElectricBurn, setIsElectricBurn] = useState("");

  const [ad, setAd] = useState(quizList?.ad ?? "");
  const [pulse, setPulse] = useState(quizList?.pulse ?? "");
  const [saturation, setSaturation] = useState(quizList?.saturation ?? "");

  useEffect(() => {
    if (quizList) {
      if (quizList.isClearConsciousness) setIsClearConsciousness("true");
      else setIsClearConsciousness("");

      if (quizList.isStunning) setIsStunning("true");
      else setIsStunning("");

      if (quizList.isSopor) setIsSopor("true");
      else setIsSopor("");

      if (quizList.isComa) setIsComa("true");
      else setIsComa("");

      if (quizList.isThermalBurn) setIsThermalBurn("true");
      else setIsThermalBurn("");

      if (quizList.isChemicalBurn) setIsChemicalBurn("true");
      else setIsChemicalBurn("");

      if (quizList.isInhalationBurn) setIsInhalationBurn("true");
      else setIsInhalationBurn("");

      if (quizList.isElectricBurn) setIsElectricBurn("true");
      else setIsElectricBurn("");
    }
  }, [quizList]);

  return (
    <div className={s.SecondSection}>
      <Title>Раздел 2: Витальные показатели</Title>
      <div className={s.container}>
        <div className={s.whiteBox}>
          {/* Состояние сознания */}
          <div className={s.field}>
            <h2 className={s.title}>Уровень сознания:</h2>
            <div className={s.buttonContainer}>
              <div className={s.styledRadioButton}>
                <RadioButtonTrue
                  id={"1_1"}
                  value="true"
                  onChange={(str) => {
                    setIsClearConsciousness(str);
                    setIsStunning("");
                    setIsSopor("");
                    setIsComa("");

                    onBlurHandler("isClearConsciousness", "true");
                    onBlurHandler("isStunning", "");
                    onBlurHandler("isSopor", "");
                    onBlurHandler("isComa", "");
                  }}
                  name={"consciousness"}
                  currentValue={isClearConsciousness}
                />
                <span>Ясное</span>
              </div>

              <div className={s.styledRadioButton}>
                <RadioButtonTrue
                  id={"1_2"}
                  value="true"
                  onChange={(str) => {
                    setIsStunning(str);
                    setIsClearConsciousness("");
                    setIsSopor("");
                    setIsComa("");

                    onBlurHandler("isStunning", "true");
                    onBlurHandler("isClearConsciousness", "");
                    onBlurHandler("isSopor", "");
                    onBlurHandler("isComa", "");
                  }}
                  name={"consciousness"}
                  currentValue={isStunning}
                />
                <span>Оглушение</span>
              </div>

              <div className={s.styledRadioButton}>
                <RadioButtonTrue
                  id={"1_3"}
                  value="true"
                  onChange={(str) => {
                    setIsSopor(str);
                    setIsClearConsciousness("");
                    setIsStunning("");
                    setIsComa("");

                    onBlurHandler("isClearConsciousness", "");
                    onBlurHandler("isStunning", "");
                    onBlurHandler("isSopor", "true");
                    onBlurHandler("isComa", "");
                  }}
                  name={"consciousness"}
                  currentValue={isSopor}
                />
                <span>Сопор</span>
              </div>

              <div className={s.styledRadioButton}>
                <RadioButtonTrue
                  id={"1_4"}
                  value="true"
                  onChange={(str) => {
                    setIsComa(str);
                    setIsSopor("");
                    setIsClearConsciousness("");
                    setIsStunning("");

                    onBlurHandler("isClearConsciousness", "");
                    onBlurHandler("isStunning", "");
                    onBlurHandler("isSopor", "");
                    onBlurHandler("isComa", "true");
                  }}
                  name={"consciousness"}
                  currentValue={isComa}
                />
                <span>Кома</span>
              </div>
            </div>
          </div>
        </div>
        <div className={s.whiteBox}>
          {/* Тип ожога */}
          <div className={s.field}>
            <h2 className={s.title}>Вид ожога:</h2>
            <div className={s.buttonContainer}>
              <div className={s.styledRadioButton}>
                <RadioButtonTrue
                  id={"2_1"}
                  value="true"
                  onChange={(str) => {
                    setIsThermalBurn(str);
                    setIsChemicalBurn("");
                    setIsInhalationBurn("");
                    setIsElectricBurn("");

                    onBlurHandler("isThermalBurn", "true");
                    onBlurHandler("isChemicalBurn", "");
                    onBlurHandler("isInhalationBurn", "");
                    onBlurHandler("isElectricBurn", "");
                  }}
                  name={"typeOfBurn"}
                  currentValue={isThermalBurn}
                />
                <span>Термический</span>
              </div>
              <div className={s.styledRadioButton}>
                <RadioButtonTrue
                  id={"2_2"}
                  value="true"
                  onChange={(str) => {
                    setIsChemicalBurn(str);
                    setIsThermalBurn("");
                    setIsInhalationBurn("");
                    setIsElectricBurn("");

                    onBlurHandler("isThermalBurn", "");
                    onBlurHandler("isChemicalBurn", "true");
                    onBlurHandler("isInhalationBurn", "");
                    onBlurHandler("isElectricBurn", "");
                  }}
                  name={"typeOfBurn"}
                  currentValue={isChemicalBurn}
                />
                <span>Химический</span>
              </div>
              <div className={s.styledRadioButton}>
                <RadioButtonTrue
                  id={"2_3"}
                  value="true"
                  onChange={(str) => {
                    setIsInhalationBurn(str);
                    setIsChemicalBurn("");
                    setIsThermalBurn("");
                    setIsElectricBurn("");

                    onBlurHandler("isThermalBurn", "");
                    onBlurHandler("isChemicalBurn", "");
                    onBlurHandler("isElectricBurn", "");
                    onBlurHandler("isInhalationBurn", "true");
                  }}
                  name={"typeOfBurn"}
                  currentValue={isInhalationBurn}
                />
                <span>Ингаляционный</span>
              </div>
              <div className={s.styledRadioButton}>
                <RadioButtonTrue
                  id={"2_4"}
                  value="true"
                  onChange={(str) => {
                    setIsElectricBurn(str);
                    setIsInhalationBurn("");
                    setIsChemicalBurn("");
                    setIsThermalBurn("");

                    onBlurHandler("isThermalBurn", "");
                    onBlurHandler("isChemicalBurn", "");
                    onBlurHandler("isInhalationBurn", "");
                    onBlurHandler("isElectricBurn", "true");
                  }}
                  name={"typeOfBurn"}
                  currentValue={isElectricBurn}
                />
                <span>Электрический</span>
              </div>
            </div>
          </div>
        </div>
        <div className={s.inputContainer}>
          {/* AD */}
          <div className={classNames(s.field, s.fields)}>
            <span className={s.title}>А / Д</span>
            <div className={s.inputWrapper}>
              <input
                type="text"
                placeholder="_ _"
                inputMode="numeric"
                value={ad}
                onChange={(e) => setAd(e.target.value)}
                onBlur={() => onBlurHandler("ad", ad)}
                onKeyPress={validate}
              />
            </div>
            <div className={s.unit}>
              <span>мм рт ст</span>
            </div>
          </div>

          {/* Пульс */}
          <div className={classNames(s.field, s.fields)}>
            <span className={s.title}>Пульс</span>
            <div className={s.inputWrapper}>
              <input
                type="text"
                placeholder="_ _"
                inputMode="numeric"
                value={pulse}
                onChange={(e) => setPulse(e.target.value)}
                onBlur={() => onBlurHandler("pulse", pulse)}
                onKeyPress={validate}
              />
            </div>
            <div className={s.unit}>
              <span>уд в 1 минуту</span>
            </div>
          </div>

          {/* Сатурация */}
          <div className={classNames(s.field, s.fields)}>
            <span className={s.title}>Сатурация SpO₂</span>
            <div className={s.inputWrapper}>
              <input
                type="text"
                placeholder="_ _"
                inputMode="numeric"
                value={saturation}
                onChange={(e) => setSaturation(e.target.value)}
                onBlur={() => onBlurHandler("saturation", saturation)}
                onKeyPress={validate}
              />
            </div>
            <div className={s.unit}>
              <span className={s.name}>% (с O₂ / без)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
