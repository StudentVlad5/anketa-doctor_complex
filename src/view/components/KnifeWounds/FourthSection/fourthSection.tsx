import s from "./index.module.scss";
import { Title } from "../../../ui/Title";
import { useState, useEffect } from "react";
import {
  useAppSelector,
  useThunks,
} from "../../../../common/helpers/reduxHook";
import { QuizThunks } from "../../../../store/thunks/quiz.thunks";
import { QuizState } from "../../../../store/reducers/quiz.reducer";
import { RadioButton } from "../../../ui/RadioButton";
import { InputTime } from "../../../ui/InputTime";
import {
  RadioButtonFalse,
  RadioButtonTrue,
} from "../../../ui/RadioButtonWithoutSpan";

export const FourthSectionKnifeWounds = () => {
  const { addQuizAnswerThunk } = useThunks(QuizThunks);
  const { quizList } = useAppSelector(QuizState);

  const [anesthesia, setAnesthesia] = useState<any>(
    quizList?.anesthesia ?? ""
  );
  const [instalOfPeripheralCatheter, setInstalOfPeripheralCatheter] = useState<any>(
    quizList?.instalOfPeripheralCatheter ?? ""
  );
  const [infusion, setInfusion] = useState<any>(
    quizList?.infusion ?? ""
  );

  const [timeOfApplOfTourniquetHh, setTimeOfApplOfTourniquetHh] = useState<string>("00");
  const [timeOfApplOfTourniquetMm, setTimeOfApplOfTourniquetMm] = useState<string>("00");
  const [pressureBandage, setPressureBandage] = useState<any>(
    quizList?.pressureBandage ?? ""
  );


  const onBlurHandler = (name: string, value: any) => {
    addQuizAnswerThunk({
      params: {
        [name]: value,
      },
    });
  };

  useEffect(() => {
    quizList?.anesthesia
      ? setAnesthesia(
        quizList?.anesthesia === "наркотическое"
          ? "наркотическое"
          : quizList?.anesthesia === "ненаркотическое"
            ? "ненаркотическое"
            : "другое"
      )
      : setAnesthesia("");
    quizList?.instalOfPeripheralCatheter
      ? setInstalOfPeripheralCatheter(
        quizList?.instalOfPeripheralCatheter === "да"
          ? "да"
          : quizList?.instalOfPeripheralCatheter === "нет"
            ? "нет"
            : "другое"
      )
      : setInstalOfPeripheralCatheter("");
    quizList?.infusion
      ? setInfusion(
        quizList?.infusion === "глюкоза 5%"
          ? "глюкоза 5%"
          : quizList?.infusion === "физ раствор 0,9%"
            ? "физ раствор 0,9%"
            : quizList?.infusion === "полиглюкин"
              ? "полиглюкин"
              : quizList?.infusion === "аминокапроновая"
                ? "аминокапроновая"
                : quizList?.infusion === "кислота 5%"
                  ? "кислота 5%"
                  : "другое"
      )
      : setInfusion("");

    quizList?.timeOfCallingHh
      ? setTimeOfApplOfTourniquetHh(quizList?.timeOfApplOfTourniquetHh)
      : setTimeOfApplOfTourniquetHh("00");
    quizList?.timeOfCallingMm
      ? setTimeOfApplOfTourniquetMm(quizList?.timeOfApplOfTourniquetMm)
      : setTimeOfApplOfTourniquetMm("00");

    quizList?.pressureBandage
      ? setPressureBandage(
        quizList?.pressureBandage === "true"
          ? "true"
          : quizList?.pressureBandage === "false"
            ? "false"
            : "false") :
      setPressureBandage("");

  }, [quizList]);

  return (
    <div className={s.ThirdSection}>
      <Title>Раздел 2: Соберите следующую информацию</Title>

      <div className={s.inner}>
        <table>
          <tbody>
            <tr className={s.tableRow}>
              <td className={s.checkbox}>
                <span className={s.title}>
                  Обезболивание
                </span>
              </td>
              <td className={s.tdButton}>
                <RadioButton
                  id={"anesthesia_1"}
                  value={"наркотическое"}
                  onChange={(str) => {
                    setAnesthesia(str);
                    onBlurHandler("anesthesia", str);
                  }}
                  name={"anesthesia"}
                  currentValue={anesthesia}
                />
                <RadioButton
                  id={"anesthesia_2"}
                  value={"ненаркотическое"}
                  onChange={(str) => {
                    setAnesthesia(str);
                    onBlurHandler("anesthesia", str);
                  }}
                  name={"anesthesia"}
                  currentValue={anesthesia}
                />
                <RadioButton
                  id={"anesthesia_3"}
                  value={"другое"}
                  onChange={(str) => {
                    setAnesthesia(str);
                    onBlurHandler("anesthesia", str);
                  }}
                  name={"anesthesia"}
                  currentValue={anesthesia}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <span className={s.title}>Остановка кровотечения:</span>
        <div className={s.wrapperBox}>
          <div className={s.wrapper}>
            <span className={s.title}>Наложение жгута</span>
            <div className={s.whiteBox}>
              <InputTime
                title={""}
                valueHh={timeOfApplOfTourniquetHh}
                valueMm={timeOfApplOfTourniquetMm}
                onChangeHh={(str) => setTimeOfApplOfTourniquetHh(str)}
                onChangeMm={(str) => setTimeOfApplOfTourniquetMm(str)}
                onBlurHh={() =>
                  onBlurHandler(
                    "timeOfApplOfTourniquetHh",
                    !timeOfApplOfTourniquetHh
                      ? "00"
                      : timeOfApplOfTourniquetHh.length === 1
                        ? `0${timeOfApplOfTourniquetHh}`
                        : timeOfApplOfTourniquetHh
                  )
                }
                onBlurMm={() => {
                  onBlurHandler(
                    "timeOfApplOfTourniquetMm",
                    !timeOfApplOfTourniquetMm
                      ? "00"
                      : timeOfApplOfTourniquetMm.length === 1
                        ? `0${timeOfApplOfTourniquetMm}`
                        : timeOfApplOfTourniquetMm
                  );
                }}
              />
            </div></div>
          <div className={s.wrapper}>
            <span className={s.title}>Давящая повязка</span>
            <div className={s.checkboxRadio}>
              <RadioButtonTrue
                id={"1_1"}
                value={"true"}
                onChange={(str) => {
                  setPressureBandage(str);
                  onBlurHandler("pressureBandage", str);
                }}
                name={"pressureBandage"}
                currentValue={pressureBandage}
              />
              <RadioButtonFalse
                id={"1_2"}
                value={"false"}
                onChange={(str) => {
                  setPressureBandage(str);
                  onBlurHandler("pressureBandage", str);
                }}
                name={"pressureBandage"}
                currentValue={pressureBandage}
              />
            </div>
          </div>
        </div>
        <table>
          <tbody>
            <tr className={s.tableRow}>
              <td className={s.checkbox}>
                <span className={s.title}>
                  Установка периферического катетера
                </span>
              </td>
              <td className={s.tdButton}>
                <RadioButton
                  id={"instalOfPeripheralCatheter"}
                  value={"да"}
                  onChange={(str) => {
                    setInstalOfPeripheralCatheter(str);
                    onBlurHandler("instalOfPeripheralCatheter", str);
                  }}
                  name={"instalOfPeripheralCatheter"}
                  currentValue={instalOfPeripheralCatheter}
                />
                <RadioButton
                  id={"instalOfPeripheralCatheter_2"}
                  value={"нет"}
                  onChange={(str) => {
                    setInstalOfPeripheralCatheter(str);
                    onBlurHandler("instalOfPeripheralCatheter", str);
                  }}
                  name={"instalOfPeripheralCatheter"}
                  currentValue={instalOfPeripheralCatheter}
                />
                <RadioButton
                  id={"instalOfPeripheralCatheter_3"}
                  value={"другое"}
                  onChange={(str) => {
                    setInstalOfPeripheralCatheter(str);
                    onBlurHandler("instalOfPeripheralCatheter", str);
                  }}
                  name={"instalOfPeripheralCatheter"}
                  currentValue={instalOfPeripheralCatheter}
                />
              </td>
            </tr>
            <tr className={s.tableRow}>
              <td className={s.checkbox}>
                <span className={s.title}>
                  Инфузия
                </span>
              </td>
              <td className={s.tdButton}>
                <RadioButton
                  id={"infusion"}
                  value={"глюкоза  5%"}
                  onChange={(str) => {
                    setInfusion(str);
                    onBlurHandler("infusion", str);
                  }}
                  name={"infusion"}
                  currentValue={infusion}
                />
                <RadioButton
                  id={"infusion_2"}
                  value={"физ раствор 0,9%"}
                  onChange={(str) => {
                    setInfusion(str);
                    onBlurHandler("infusion", str);
                  }}
                  name={"infusion"}
                  currentValue={infusion}
                />
                <RadioButton
                  id={"infusion_3"}
                  value={"полиглюкин"}
                  onChange={(str) => {
                    setInfusion(str);
                    onBlurHandler("infusion", str);
                  }}
                  name={"infusion"}
                  currentValue={infusion}
                />
                <RadioButton
                  id={"infusion_4"}
                  value={"аминокапроновая"}
                  onChange={(str) => {
                    setInfusion(str);
                    onBlurHandler("infusion", str);
                  }}
                  name={"infusion"}
                  currentValue={infusion}
                />
                <RadioButton
                  id={"infusion_5"}
                  value={"кислота 5%"}
                  onChange={(str) => {
                    setInfusion(str);
                    onBlurHandler("infusion", str);
                  }}
                  name={"infusion"}
                  currentValue={infusion}
                />
                <RadioButton
                  id={"infusion_6"}
                  value={"другое"}
                  onChange={(str) => {
                    setInfusion(str);
                    onBlurHandler("infusion", str);
                  }}
                  name={"infusion"}
                  currentValue={infusion}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
