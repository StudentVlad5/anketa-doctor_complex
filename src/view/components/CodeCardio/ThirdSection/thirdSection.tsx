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
import { InputTime } from "../../../ui/InputTime";
import { useOnBlurHandler } from "../../../../common/helpers/useOnBlurHandler";
import { validate } from "../../../../common/helpers/validate";
import { InputText } from "../../../ui/InputText";
import { InputFloat } from "../../../ui/InputFloat/InputFloat";

export const ThirdSectionCodeCardio = () => {
  const { addQuizAnswerThunk } = useThunks(QuizThunks);
  const { quizList } = useAppSelector(QuizState);
  const { onBlurHandler } = useOnBlurHandler({ addQuizAnswerThunk });

  const [firstMedicalContactHh, setFirstMedicalContactHh] = useState("");
  const [firstMedicalContactMm, setFirstMedicalContactMm] = useState("");
  const [adLeftHand, setAdLeftHand] = useState("");
  const [adRightHand, setAdRightHand] = useState("");
  const [pulse, setPulse] = useState("");
  const [breathingRate, setBreathingRate] = useState("");
  const [rhythm, setRhythm] = useState("");
  const [deficit, setDeficit] = useState("");
  const [chdd, setChdd] = useState("");
  const [satO, setSatO] = useState("");
  const [isSignsOfHF_edema, setIsSignsOfHF_edema] = useState("");
  const [isSignsOfHF_wheezing, setIsSignsOfHF_wheezing] = useState("");
  const [physicalExaminationOther, setPhysicalExaminationOther] = useState("");

  useEffect(() => {
    if (quizList) {
      setFirstMedicalContactHh(quizList?.firstMedicalContactHh ?? "");
      setFirstMedicalContactMm(quizList?.firstMedicalContactMm ?? "");
      setAdLeftHand(quizList?.adLeftHand ?? "");
      setAdRightHand(quizList?.adRightHand ?? "");
      setPulse(quizList?.pulse ?? "");
      setBreathingRate(quizList?.breathingRate ?? "");
      setRhythm(quizList?.rhythm ?? "");
      setDeficit(quizList?.deficit ?? "");
      setChdd(quizList?.chdd ?? "");
      setSatO(quizList?.satO ?? "");
      setIsSignsOfHF_edema(quizList?.isSignsOfHF_edema ?? "");
      setIsSignsOfHF_wheezing(quizList?.isSignsOfHF_wheezing ?? "");
      setPhysicalExaminationOther(quizList?.physicalExaminationOther ?? "");
    }
  }, [quizList]);

  return (
    <div className={s.ThirdSection}>
      <Title>Раздел 3: Физикальный осмотр</Title>

      <div className={s.field}>
        <span className={s.title}>Первый медицинский контакт</span>
        <div className={s.whiteBox}>
          <InputTime
            valueHh={firstMedicalContactHh}
            valueMm={firstMedicalContactMm}
            onChangeHh={(str) => setFirstMedicalContactHh(str)}
            onChangeMm={(str) => setFirstMedicalContactMm(str)}
            onBlurHh={() =>
              onBlurHandler(
                "firstMedicalContactHh",
                !firstMedicalContactHh
                  ? "00"
                  : firstMedicalContactHh.length === 1
                  ? `0${firstMedicalContactHh}`
                  : firstMedicalContactHh
              )
            }
            onBlurMm={() => {
              onBlurHandler(
                "firstMedicalContactMm",
                !firstMedicalContactMm
                  ? "00"
                  : firstMedicalContactMm.length === 1
                  ? `0${firstMedicalContactMm}`
                  : firstMedicalContactMm
              );
            }}
          />
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>А /Д (на обеих руках)</span>
        <div className={s.inputWrapper}>
          <div className={s.columnChange}>
            <InputFloat
              value={adLeftHand}
              onChange={setAdLeftHand}
              onBlur={() => onBlurHandler("adLeftHand", adLeftHand)}
              validate={(val) => validate(val)}
              placeholder="Левая рука"
            />
            <InputFloat
              value={adRightHand}
              onChange={setAdRightHand}
              onBlur={() => onBlurHandler("adRightHand", adRightHand)}
              validate={(val) => validate(val)}
              placeholder="Правая рука"
            />
          </div>
          <div className={s.unit}>
            <span>мм рт ст</span>
          </div>
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>Пульс</span>
        <div className={s.inputWrapper}>
          <input
            type="text"
            placeholder={"_ _"}
            inputMode={"numeric"}
            value={pulse}
            onChange={(e) => setPulse(e.target.value)}
            onBlur={() => onBlurHandler("pulse", pulse)}
            onKeyPress={validate}
          />
          <div className={s.unit}>
            <span>уд в 1 минуту</span>
          </div>
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>Частота дыхания</span>
        <div className={s.inputWrapper}>
          <input
            type="text"
            placeholder={"_ _"}
            inputMode={"numeric"}
            value={breathingRate}
            onChange={(e) => setBreathingRate(e.target.value)}
            onBlur={() => onBlurHandler("breathingRate", breathingRate)}
            onKeyPress={validate}
          />
          <div className={s.unit}>
            <span>мин</span>
          </div>
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>Ритм</span>
        <div className={s.inputWrapper}>
          <input
            type="text"
            placeholder={"_ _"}
            inputMode={"numeric"}
            value={rhythm}
            onChange={(e) => setRhythm(e.target.value)}
            onBlur={() => onBlurHandler("rhythm", rhythm)}
            onKeyPress={validate}
          />
          <div className={s.unit}>
            <span></span>
          </div>
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>Дефицит, разница между ЧСС и пульсом</span>
        <div className={s.inputWrapper}>
          <input
            type="text"
            placeholder={"_ _"}
            inputMode={"numeric"}
            value={deficit}
            onChange={(e) => setDeficit(e.target.value)}
            onBlur={() => onBlurHandler("deficit", deficit)}
            onKeyPress={validate}
          />
          <div className={s.unit}>
            <span></span>
          </div>
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>ЧДД</span>
        <div className={s.inputWrapper}>
          <input
            type="text"
            placeholder={"_ _"}
            inputMode={"numeric"}
            value={chdd}
            onChange={(e) => setChdd(e.target.value)}
            onBlur={() => onBlurHandler("chdd", chdd)}
            onKeyPress={validate}
          />
          <div className={s.unit}>
            <span></span>
          </div>
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>SatO₂ (SpO₂)</span>
        <div className={s.inputWrapper}>
          <input
            type="text"
            placeholder={"_ _"}
            inputMode={"numeric"}
            value={satO}
            onChange={(e) => setSatO(e.target.value)}
            onBlur={() => onBlurHandler("satO", satO)}
            onKeyPress={validate}
          />
          <div className={s.unit}>
            <span></span>
          </div>
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>Признаки СН отеки</span>
        <div className={s.tdButton}>
          <RadioButtonTrue
            id={"1_1"}
            value={"true"}
            onChange={(str) => {
              setIsSignsOfHF_edema(str);
              onBlurHandler("isSignsOfHF_edema", str);
            }}
            name={"isSignsOfHF_edema"}
            currentValue={isSignsOfHF_edema}
          />
          <RadioButtonFalse
            id={"1_2"}
            value={"false"}
            onChange={(str) => {
              setIsSignsOfHF_edema(str);
              onBlurHandler("isSignsOfHF_edema", str);
            }}
            name={"isSignsOfHF_edema"}
            currentValue={isSignsOfHF_edema}
          />
          <RadioButtonUnknow
            id={"1_3"}
            value={"unknow"}
            onChange={(str) => {
              setIsSignsOfHF_edema(str);
              onBlurHandler("isSignsOfHF_edema", str);
            }}
            name={"isSignsOfHF_edema"}
            currentValue={isSignsOfHF_edema}
          />
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>Признаки СН хрипы</span>
        <div className={s.tdButton}>
          <RadioButtonTrue
            id={"2_1"}
            value={"true"}
            onChange={(str) => {
              setIsSignsOfHF_wheezing(str);
              onBlurHandler("isSignsOfHF_wheezing", str);
            }}
            name={"isSignsOfHF_wheezing"}
            currentValue={isSignsOfHF_wheezing}
          />
          <RadioButtonFalse
            id={"2_2"}
            value={"false"}
            onChange={(str) => {
              setIsSignsOfHF_wheezing(str);
              onBlurHandler("isSignsOfHF_wheezing", str);
            }}
            name={"isSignsOfHF_wheezing"}
            currentValue={isSignsOfHF_wheezing}
          />
          <RadioButtonUnknow
            id={"2_3"}
            value={"unknow"}
            onChange={(str) => {
              setIsSignsOfHF_wheezing(str);
              onBlurHandler("isSignsOfHF_wheezing", str);
            }}
            name={"isSignsOfHF_wheezing"}
            currentValue={isSignsOfHF_wheezing}
          />
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>Другое:</span>
        <div className={s.whiteBox}>
          <InputText
            className={s.textInputStyle}
            onChange={(e) => setPhysicalExaminationOther(e.target.value)}
            value={physicalExaminationOther}
            onBlur={() =>
              onBlurHandler(
                "physicalExaminationOther",
                physicalExaminationOther
              )
            }
          />
        </div>
      </div>
    </div>
  );
};
