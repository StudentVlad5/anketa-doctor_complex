import s from "./index.module.scss";
import { Title } from "../../../ui/Title";
import { useEffect, useState } from "react";
import {
  useAppSelector,
  useThunks,
} from "../../../../common/helpers/reduxHook";
import { QuizThunks } from "../../../../store/thunks/quiz.thunks";
import { QuizState } from "../../../../store/reducers/quiz.reducer";
import {
  RadioButtonFalse,
  RadioButtonTrue,
  RadioButtonUnknow,
} from "../../../ui/RadioButtonWithoutSpan";
import { useOnBlurHandler } from "../../../../common/helpers/useOnBlurHandler";
import { InputText } from "../../../ui/InputText";

export const FourthSectionCodeCardio = () => {
  const { addQuizAnswerThunk } = useThunks(QuizThunks);
  const { quizList } = useAppSelector(QuizState);
  const { onBlurHandler } = useOnBlurHandler({ addQuizAnswerThunk });

  const [isECCarriedOut, setIsECCarriedOut] = useState("");
  const [isElevation, setIsElevation] = useState("");
  const [isDepression, setIsDepression] = useState("");
  const [isFibrillation, setIsFibrillation] = useState("");
  const [isBlockade, setIsBlockade] = useState("");
  const [ecgOther, setEcgOther] = useState("");

  useEffect(() => {
    if (quizList) {
      setIsECCarriedOut(quizList?.isECCarriedOut ?? "");
      setIsElevation(quizList?.isElevation ?? "");
      setIsDepression(quizList?.isDepression ?? "");
      setIsFibrillation(quizList?.isFibrillation ?? "");
      setIsBlockade(quizList?.isBlockade ?? "");
      setEcgOther(quizList?.ecgOther ?? "");
    }
  }, [quizList]);

  return (
    <div className={s.FourthSection}>
      <Title>Раздел 4: ЭКГ (до 10 минут от контакта!)</Title>

      <div className={s.field}>
        <span className={s.title}>Проведена ЭКГ (12 отведений)</span>
        <div className={s.tdButton}>
          <RadioButtonTrue
            id={"1_1"}
            value={"true"}
            onChange={(str) => {
              setIsECCarriedOut(str);
              onBlurHandler("isECCarriedOut", str);
            }}
            name={"isECCarriedOut"}
            currentValue={isECCarriedOut}
          />
          <RadioButtonFalse
            id={"1_2"}
            value={"false"}
            onChange={(str) => {
              setIsECCarriedOut(str);
              onBlurHandler("isECCarriedOut", str);
            }}
            name={"isECCarriedOut"}
            currentValue={isECCarriedOut}
          />
          <RadioButtonUnknow
            id={"1_3"}
            value={"unknow"}
            onChange={(str) => {
              setIsECCarriedOut(str);
              onBlurHandler("isECCarriedOut", str);
            }}
            name={"isECCarriedOut"}
            currentValue={isECCarriedOut}
          />
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>Есть элевация ST ≥ 2 мм</span>
        <div className={s.tdButton}>
          <RadioButtonTrue
            id={"2_1"}
            value={"true"}
            onChange={(str) => {
              setIsElevation(str);
              onBlurHandler("isElevation", str);
            }}
            name={"isElevation"}
            currentValue={isElevation}
          />
          <RadioButtonFalse
            id={"2_2"}
            value={"false"}
            onChange={(str) => {
              setIsElevation(str);
              onBlurHandler("isElevation", str);
            }}
            name={"isElevation"}
            currentValue={isElevation}
          />
          <RadioButtonUnknow
            id={"2_3"}
            value={"unknow"}
            onChange={(str) => {
              setIsElevation(str);
              onBlurHandler("isElevation", str);
            }}
            name={"isElevation"}
            currentValue={isElevation}
          />
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>Есть депрессия ST, инверсия T</span>
        <div className={s.tdButton}>
          <RadioButtonTrue
            id={"3_1"}
            value={"true"}
            onChange={(str) => {
              setIsDepression(str);
              onBlurHandler("isDepression", str);
            }}
            name={"isDepression"}
            currentValue={isDepression}
          />
          <RadioButtonFalse
            id={"3_2"}
            value={"false"}
            onChange={(str) => {
              setIsDepression(str);
              onBlurHandler("isDepression", str);
            }}
            name={"isDepression"}
            currentValue={isDepression}
          />
          <RadioButtonUnknow
            id={"3_3"}
            value={"unknow"}
            onChange={(str) => {
              setIsDepression(str);
              onBlurHandler("isDepression", str);
            }}
            name={"isDepression"}
            currentValue={isDepression}
          />
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>Признаки фибрилляции</span>
        <div className={s.tdButton}>
          <RadioButtonTrue
            id={"4_1"}
            value={"true"}
            onChange={(str) => {
              setIsFibrillation(str);
              onBlurHandler("isFibrillation", str);
            }}
            name={"isFibrillation"}
            currentValue={isFibrillation}
          />
          <RadioButtonFalse
            id={"4_2"}
            value={"false"}
            onChange={(str) => {
              setIsFibrillation(str);
              onBlurHandler("isFibrillation", str);
            }}
            name={"isFibrillation"}
            currentValue={isFibrillation}
          />
          <RadioButtonUnknow
            id={"4_3"}
            value={"unknow"}
            onChange={(str) => {
              setIsFibrillation(str);
              onBlurHandler("isFibrillation", str);
            }}
            name={"isFibrillation"}
            currentValue={isFibrillation}
          />
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>Признаки блокады</span>
        <div className={s.tdButton}>
          <RadioButtonTrue
            id={"5_1"}
            value={"true"}
            onChange={(str) => {
              setIsBlockade(str);
              onBlurHandler("isBlockade", str);
            }}
            name={"isBlockade"}
            currentValue={isBlockade}
          />
          <RadioButtonFalse
            id={"5_2"}
            value={"false"}
            onChange={(str) => {
              setIsBlockade(str);
              onBlurHandler("isBlockade", str);
            }}
            name={"isBlockade"}
            currentValue={isBlockade}
          />
          <RadioButtonUnknow
            id={"5_3"}
            value={"unknow"}
            onChange={(str) => {
              setIsBlockade(str);
              onBlurHandler("isBlockade", str);
            }}
            name={"isBlockade"}
            currentValue={isBlockade}
          />
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>Другое:</span>
        <div className={s.whiteBox}>
          <InputText
            className={s.textInputStyle}
            onChange={(e) => setEcgOther(e.target.value)}
            value={ecgOther}
            onBlur={() => onBlurHandler("ecgOther", ecgOther)}
          />
        </div>
      </div>
    </div>
  );
};
