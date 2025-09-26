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

export const SixthSectionCodeCardio = () => {
  const { addQuizAnswerThunk } = useThunks(QuizThunks);
  const { quizList } = useAppSelector(QuizState);
  const { onBlurHandler } = useOnBlurHandler({ addQuizAnswerThunk });

  const [firstMedicalContactHh, setFirstMedicalContactHh] = useState("");
  const [firstMedicalContactMm, setFirstMedicalContactMm] = useState("");
  const [timeOfBuginOfSymptomsHh, setTimeOfBuginOfSymptomsHh] = useState("");
  const [timeOfBuginOfSymptomsMm, setTimeOfBuginOfSymptomsMm] = useState("");
  const [timeOfHospitaTransferlHh, setTimeOfHospitaTransferlHh] = useState("");
  const [timeOfHospitaTransferlMm, setTimeOfHospitaTransferlMm] = useState("");

  const [adLeftHandOfHospitaTransfer, setAdLeftHandOfHospitaTransfer] =
    useState("");
  const [adRightHandOfHospitaTransfer, setAdRightHandOfHospitaTransfer] =
    useState("");
  const [pulseOfHospitaTransfer, setPulseOfHospitaTransfer] = useState("");
  const [breathingRateOfHospitaTransfer, setBreathingRateOfHospitaTransfer] =
    useState("");
  const [rhythmOfHospitaTransfer, setRhythmOfHospitaTransfer] = useState("");
  const [deficitOfHospitaTransfer, setDeficitOfHospitaTransfer] = useState("");
  const [chddOfHospitaTransfer, setChddOfHospitaTransfer] = useState("");
  const [satOOfHospitaTransfer, setSatOOfHospitaTransfer] = useState("");
  const [
    isSignsOfHF_edemaOfHospitaTransfer,
    setIsSignsOfHF_edemaOfHospitaTransfer,
  ] = useState("");
  const [
    isSignsOfHF_wheezingOfHospitaTransfer,
    setIsSignsOfHF_wheezingOfHospitaTransfer,
  ] = useState("");
  const [
    physicalExaminationOtherOfHospitaTransfer,
    setPhysicalExaminationOtherOfHospitaTransfer,
  ] = useState("");
  const [isVenousAccess, setIsVenousAccess] = useState("");

  useEffect(() => {
    if (quizList) {
      setFirstMedicalContactHh(quizList?.firstMedicalContactHh ?? "");
      setFirstMedicalContactMm(quizList?.firstMedicalContactMm ?? "");
      setTimeOfBuginOfSymptomsHh(quizList?.timeOfBuginOfSymptomsHh ?? "");
      setTimeOfBuginOfSymptomsMm(quizList?.timeOfBuginOfSymptomsMm ?? "");
      setTimeOfHospitaTransferlHh(quizList?.timeOfHospitaTransferlHh ?? "");
      setTimeOfHospitaTransferlMm(quizList?.timeOfHospitaTransferlMm ?? "");
      setIsVenousAccess(quizList?.isVenousAccess ?? "");

      setAdLeftHandOfHospitaTransfer(
        quizList?.adLeftHandOfHospitaTransfer ?? ""
      );
      setAdRightHandOfHospitaTransfer(
        quizList?.adRightHandOfHospitaTransfer ?? ""
      );
      setPulseOfHospitaTransfer(quizList?.pulseOfHospitaTransfer ?? "");
      setBreathingRateOfHospitaTransfer(
        quizList?.breathingRateOfHospitaTransfer ?? ""
      );
      setRhythmOfHospitaTransfer(quizList?.rhythmOfHospitaTransfer ?? "");
      setDeficitOfHospitaTransfer(quizList?.deficitOfHospitaTransfer ?? "");
      setChddOfHospitaTransfer(quizList?.chddOfHospitaTransfer ?? "");
      setSatOOfHospitaTransfer(quizList?.satOOfHospitaTransfer ?? "");
      setIsSignsOfHF_edemaOfHospitaTransfer(
        quizList?.isSignsOfHF_edemaOfHospitaTransfer ?? ""
      );
      setIsSignsOfHF_wheezingOfHospitaTransfer(
        quizList?.isSignsOfHF_wheezingOfHospitaTransfer ?? ""
      );
      setPhysicalExaminationOtherOfHospitaTransfer(
        quizList?.physicalExaminationOtherOfHospitaTransfer ?? ""
      );
    }
  }, [quizList]);

  return (
    <div className={s.SixthSection}>
      <Title>Раздел 6: Передача пациента</Title>

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
        <span className={s.title}>Время начала симптомов</span>
        <div className={s.whiteBox}>
          <InputTime
            valueHh={timeOfBuginOfSymptomsHh}
            valueMm={timeOfBuginOfSymptomsMm}
            onChangeHh={(str) => setTimeOfBuginOfSymptomsHh(str)}
            onChangeMm={(str) => setTimeOfBuginOfSymptomsMm(str)}
            onBlurHh={() =>
              onBlurHandler(
                "timeOfBuginOfSymptomsHh",
                !timeOfBuginOfSymptomsHh
                  ? "00"
                  : timeOfBuginOfSymptomsHh.length === 1
                  ? `0${timeOfBuginOfSymptomsHh}`
                  : timeOfBuginOfSymptomsHh
              )
            }
            onBlurMm={() => {
              onBlurHandler(
                "timeOfBuginOfSymptomsMm",
                !timeOfBuginOfSymptomsMm
                  ? "00"
                  : timeOfBuginOfSymptomsMm.length === 1
                  ? `0${timeOfBuginOfSymptomsMm}`
                  : timeOfBuginOfSymptomsMm
              );
            }}
          />
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>Время передачи в больницу</span>
        <div className={s.whiteBox}>
          <InputTime
            valueHh={timeOfHospitaTransferlHh}
            valueMm={timeOfHospitaTransferlMm}
            onChangeHh={(str) => setTimeOfHospitaTransferlHh(str)}
            onChangeMm={(str) => setTimeOfHospitaTransferlMm(str)}
            onBlurHh={() =>
              onBlurHandler(
                "timeOfHospitaTransferlHh",
                !timeOfHospitaTransferlHh
                  ? "00"
                  : timeOfHospitaTransferlHh.length === 1
                  ? `0${timeOfHospitaTransferlHh}`
                  : timeOfHospitaTransferlHh
              )
            }
            onBlurMm={() => {
              onBlurHandler(
                "timeOfHospitaTransferlMm",
                !timeOfHospitaTransferlMm
                  ? "00"
                  : timeOfHospitaTransferlMm.length === 1
                  ? `0${timeOfHospitaTransferlMm}`
                  : timeOfHospitaTransferlMm
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
              value={adLeftHandOfHospitaTransfer}
              onChange={setAdLeftHandOfHospitaTransfer}
              onBlur={() =>
                onBlurHandler(
                  "adLeftHandOfHospitaTransfer",
                  adLeftHandOfHospitaTransfer
                )
              }
              validate={(val) => validate(val)}
              placeholder="Левая рука"
            />
            <InputFloat
              value={adRightHandOfHospitaTransfer}
              onChange={setAdRightHandOfHospitaTransfer}
              onBlur={() =>
                onBlurHandler(
                  "adRightHandOfHospitaTransfer",
                  adRightHandOfHospitaTransfer
                )
              }
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
            value={pulseOfHospitaTransfer}
            onChange={(e) => setPulseOfHospitaTransfer(e.target.value)}
            onBlur={() =>
              onBlurHandler("pulseOfHospitaTransfer", pulseOfHospitaTransfer)
            }
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
            value={breathingRateOfHospitaTransfer}
            onChange={(e) => setBreathingRateOfHospitaTransfer(e.target.value)}
            onBlur={() =>
              onBlurHandler(
                "breathingRateOfHospitaTransfer",
                breathingRateOfHospitaTransfer
              )
            }
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
            value={rhythmOfHospitaTransfer}
            onChange={(e) => setRhythmOfHospitaTransfer(e.target.value)}
            onBlur={() =>
              onBlurHandler("rhythmOfHospitaTransfer", rhythmOfHospitaTransfer)
            }
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
            value={deficitOfHospitaTransfer}
            onChange={(e) => setDeficitOfHospitaTransfer(e.target.value)}
            onBlur={() =>
              onBlurHandler(
                "deficitOfHospitaTransfer",
                deficitOfHospitaTransfer
              )
            }
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
            value={chddOfHospitaTransfer}
            onChange={(e) => setChddOfHospitaTransfer(e.target.value)}
            onBlur={() =>
              onBlurHandler("chddOfHospitaTransfer", chddOfHospitaTransfer)
            }
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
            value={satOOfHospitaTransfer}
            onChange={(e) => setSatOOfHospitaTransfer(e.target.value)}
            onBlur={() =>
              onBlurHandler("satOOfHospitaTransfer", satOOfHospitaTransfer)
            }
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
              setIsSignsOfHF_edemaOfHospitaTransfer(str);
              onBlurHandler("isSignsOfHF_edemaOfHospitaTransfer", str);
            }}
            name={"isSignsOfHF_edemaOfHospitaTransfer"}
            currentValue={isSignsOfHF_edemaOfHospitaTransfer}
          />
          <RadioButtonFalse
            id={"1_2"}
            value={"false"}
            onChange={(str) => {
              setIsSignsOfHF_edemaOfHospitaTransfer(str);
              onBlurHandler("isSignsOfHF_edemaOfHospitaTransfer", str);
            }}
            name={"isSignsOfHF_edemaOfHospitaTransfer"}
            currentValue={isSignsOfHF_edemaOfHospitaTransfer}
          />
          <RadioButtonUnknow
            id={"1_3"}
            value={"unknow"}
            onChange={(str) => {
              setIsSignsOfHF_edemaOfHospitaTransfer(str);
              onBlurHandler("isSignsOfHF_edemaOfHospitaTransfer", str);
            }}
            name={"isSignsOfHF_edemaOfHospitaTransfer"}
            currentValue={isSignsOfHF_edemaOfHospitaTransfer}
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
              setIsSignsOfHF_wheezingOfHospitaTransfer(str);
              onBlurHandler("isSignsOfHF_wheezingOfHospitaTransfer", str);
            }}
            name={"isSignsOfHF_wheezingOfHospitaTransfer"}
            currentValue={isSignsOfHF_wheezingOfHospitaTransfer}
          />
          <RadioButtonFalse
            id={"2_2"}
            value={"false"}
            onChange={(str) => {
              setIsSignsOfHF_wheezingOfHospitaTransfer(str);
              onBlurHandler("isSignsOfHF_wheezingOfHospitaTransfer", str);
            }}
            name={"isSignsOfHF_wheezing"}
            currentValue={isSignsOfHF_wheezingOfHospitaTransfer}
          />
          <RadioButtonUnknow
            id={"2_3"}
            value={"unknow"}
            onChange={(str) => {
              setIsSignsOfHF_wheezingOfHospitaTransfer(str);
              onBlurHandler("isSignsOfHF_wheezingOfHospitaTransfer", str);
            }}
            name={"isSignsOfHF_wheezingOfHospitaTransfer"}
            currentValue={isSignsOfHF_wheezingOfHospitaTransfer}
          />
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>
          Венозный доступ (в/в катетер установлен)
        </span>
        <div className={s.tdButton}>
          <RadioButtonTrue
            id={"3_1"}
            value={"true"}
            onChange={(str) => {
              setIsVenousAccess(str);
              onBlurHandler("isVenousAccess", str);
            }}
            name={"isVenousAccess"}
            currentValue={isVenousAccess}
          />
          <RadioButtonFalse
            id={"3_2"}
            value={"false"}
            onChange={(str) => {
              setIsVenousAccess(str);
              onBlurHandler("isVenousAccess", str);
            }}
            name={"isVenousAccess"}
            currentValue={isVenousAccess}
          />
          <RadioButtonUnknow
            id={"3_3"}
            value={"unknow"}
            onChange={(str) => {
              setIsVenousAccess(str);
              onBlurHandler("isVenousAccess", str);
            }}
            name={"isVenousAccess"}
            currentValue={isVenousAccess}
          />
        </div>
      </div>

      <div className={s.field}>
        <span className={s.title}>Другое:</span>
        <div className={s.whiteBox}>
          <InputText
            className={s.textInputStyle}
            onChange={(e) =>
              setPhysicalExaminationOtherOfHospitaTransfer(e.target.value)
            }
            value={physicalExaminationOtherOfHospitaTransfer}
            onBlur={() =>
              onBlurHandler(
                "physicalExaminationOtherOfHospitaTransfer",
                physicalExaminationOtherOfHospitaTransfer
              )
            }
          />
        </div>
      </div>
    </div>
  );
};
