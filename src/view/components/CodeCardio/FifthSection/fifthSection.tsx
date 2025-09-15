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
import { InputDate } from "../../../ui/InputDate";

export const FifthSectionCodeCardio = () => {
  const { addQuizAnswerThunk } = useThunks(QuizThunks);
  const { quizList } = useAppSelector(QuizState);
  const { onBlurHandler } = useOnBlurHandler({ addQuizAnswerThunk });

  const [isASK, setIsASK] = useState("");
  const [isClopidogrel, setIsClopidogrel] = useState("");
  const [isHeparin, setIsHeparin] = useState("");
  const [isNitroglycerin, setIsNitroglycerin] = useState("");
  const [isMorphine, setIsMorphine] = useState("");
  const [isTLT, setIsTLT] = useState("");
  const [prehospitalTreatmentOther, setPrehospitalTreatmentOther] =
    useState("");
  const [startTLTDate, setStartTLTDate] = useState<string>("");
  const [finishTLTDate, setFinishTLTDate] = useState<string>("");

  useEffect(() => {
    if (quizList) {
      setIsASK(quizList?.isASK ?? "");
      setIsClopidogrel(quizList?.isClopidogrel ?? "");
      setIsHeparin(quizList?.isHeparin ?? "");
      setIsNitroglycerin(quizList?.isNitroglycerin ?? "");
      setIsMorphine(quizList?.isMorphine ?? "");
      setIsTLT(quizList?.isTLT ?? "");
      setStartTLTDate(quizList?.startTLTDate ?? "");
      setFinishTLTDate(quizList?.finishTLTDate ?? "");
      setPrehospitalTreatmentOther(quizList?.prehospitalTreatmentOther ?? "");
    }
  }, [quizList]);

  return (
    <div className={s.FifthSection}>
      <Title>Раздел 5: Догоспитальное лечение (по протоколу ОКС)</Title>

      <div className={s.field}>
        <span className={s.title}>Изокет спрей (АД не ниже 90/60мм рт ст)</span>
        <div className={s.tdButton}>
          <RadioButtonTrue
            id={"4_1"}
            value={"true"}
            onChange={(str) => {
              setIsNitroglycerin(str);
              onBlurHandler("isNitroglycerin", str);
            }}
            name={"isNitroglycerin"}
            currentValue={isNitroglycerin}
          />
          <RadioButtonFalse
            id={"4_2"}
            value={"false"}
            onChange={(str) => {
              setIsNitroglycerin(str);
              onBlurHandler("isNitroglycerin", str);
            }}
            name={"isNitroglycerin"}
            currentValue={isNitroglycerin}
          />
          <RadioButtonUnknow
            id={"4_3"}
            value={"unknow"}
            onChange={(str) => {
              setIsNitroglycerin(str);
              onBlurHandler("isNitroglycerin", str);
            }}
            name={"isNitroglycerin"}
            currentValue={isNitroglycerin}
          />
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>Морфин при болевом синдроме</span>
        <div className={s.tdButton}>
          <RadioButtonTrue
            id={"5_1"}
            value={"true"}
            onChange={(str) => {
              setIsMorphine(str);
              onBlurHandler("isMorphine", str);
            }}
            name={"isMorphine"}
            currentValue={isMorphine}
          />
          <RadioButtonFalse
            id={"5_2"}
            value={"false"}
            onChange={(str) => {
              setIsMorphine(str);
              onBlurHandler("isMorphine", str);
            }}
            name={"isMorphine"}
            currentValue={isMorphine}
          />
          <RadioButtonUnknow
            id={"5_3"}
            value={"unknow"}
            onChange={(str) => {
              setIsMorphine(str);
              onBlurHandler("isMorphine", str);
            }}
            name={"isMorphine"}
            currentValue={isMorphine}
          />
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>АСК 300 мг разжевать</span>
        <div className={s.tdButton}>
          <RadioButtonTrue
            id={"1_1"}
            value={"true"}
            onChange={(str) => {
              setIsASK(str);
              onBlurHandler("isASK", str);
            }}
            name={"isASK"}
            currentValue={isASK}
          />
          <RadioButtonFalse
            id={"1_2"}
            value={"false"}
            onChange={(str) => {
              setIsASK(str);
              onBlurHandler("isASK", str);
            }}
            name={"isASK"}
            currentValue={isASK}
          />
          <RadioButtonUnknow
            id={"1_3"}
            value={"unknow"}
            onChange={(str) => {
              setIsASK(str);
              onBlurHandler("isASK", str);
            }}
            name={"isASK"}
            currentValue={isASK}
          />
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>Тривентин 180 мг</span>
        <div className={s.tdButton}>
          <RadioButtonTrue
            id={"2_1"}
            value={"true"}
            onChange={(str) => {
              setIsClopidogrel(str);
              onBlurHandler("isClopidogrel", str);
            }}
            name={"isClopidogrel"}
            currentValue={isClopidogrel}
          />
          <RadioButtonFalse
            id={"2_2"}
            value={"false"}
            onChange={(str) => {
              setIsClopidogrel(str);
              onBlurHandler("isClopidogrel", str);
            }}
            name={"isClopidogrel"}
            currentValue={isClopidogrel}
          />
          <RadioButtonUnknow
            id={"2_3"}
            value={"unknow"}
            onChange={(str) => {
              setIsClopidogrel(str);
              onBlurHandler("isClopidogrel", str);
            }}
            name={"isClopidogrel"}
            currentValue={isClopidogrel}
          />
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>Гепарин 5000 / Эноксапарин</span>
        <div className={s.tdButton}>
          <RadioButtonTrue
            id={"3_1"}
            value={"true"}
            onChange={(str) => {
              setIsHeparin(str);
              onBlurHandler("isHeparin", str);
            }}
            name={"isHeparin"}
            currentValue={isHeparin}
          />
          <RadioButtonFalse
            id={"3_2"}
            value={"false"}
            onChange={(str) => {
              setIsHeparin(str);
              onBlurHandler("isHeparin", str);
            }}
            name={"isHeparin"}
            currentValue={isHeparin}
          />
          <RadioButtonUnknow
            id={"3_3"}
            value={"unknow"}
            onChange={(str) => {
              setIsHeparin(str);
              onBlurHandler("isHeparin", str);
            }}
            name={"isHeparin"}
            currentValue={isHeparin}
          />
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>ТЛТ</span>
        <div className={s.tdButton}>
          <RadioButtonTrue
            id={"6_1"}
            value={"true"}
            onChange={(str) => {
              setIsTLT(str);
              onBlurHandler("isTLT", str);
            }}
            name={"isTLT"}
            currentValue={isTLT}
          />
          <RadioButtonFalse
            id={"6_2"}
            value={"false"}
            onChange={(str) => {
              setIsTLT(str);
              onBlurHandler("isTLT", str);
            }}
            name={"isTLT"}
            currentValue={isTLT}
          />
          <RadioButtonUnknow
            id={"6_3"}
            value={"unknow"}
            onChange={(str) => {
              setIsTLT(str);
              onBlurHandler("isTLT", str);
            }}
            name={"isTLT"}
            currentValue={isTLT}
          />
        </div>
      </div>

      <div className={s.field}>
        <div className={s.tdButtonDate}>
          <span className={s.title}>C: </span>
          <InputDate
            valueDate={startTLTDate}
            max={new Date().toISOString().split("T")[0]}
            onChangeDate={(e) => setStartTLTDate(e.target.value)}
            onBlur={() => {
              onBlurHandler("startTLTDate", startTLTDate ?? "");
            }}
            disabled={isTLT !== "true"}
          />
        </div>
      </div>

      <div className={s.field}>
        <div className={s.tdButtonDate}>
          <span className={s.title}>По: </span>
          <InputDate
            valueDate={finishTLTDate}
            max={new Date().toISOString().split("T")[0]}
            onChangeDate={(e) => setStartTLTDate(e.target.value)}
            onBlur={() => {
              onBlurHandler("finishTLTDate", finishTLTDate ?? "");
            }}
            disabled={isTLT !== "true"}
          />
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>Другое:</span>
        <div className={s.whiteBox}>
          <InputText
            className={s.textInputStyle}
            onChange={(e) => setFinishTLTDate(e.target.value)}
            value={prehospitalTreatmentOther}
            onBlur={() =>
              onBlurHandler(
                "prehospitalTreatmentOther",
                prehospitalTreatmentOther
              )
            }
          />
        </div>
      </div>
    </div>
  );
};
