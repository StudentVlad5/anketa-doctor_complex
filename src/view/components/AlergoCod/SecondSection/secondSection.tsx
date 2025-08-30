import s from "./index.module.scss";
import { Title } from "../../../ui/Title";
import { useState, useEffect } from "react";
import {
  useAppSelector,
  useThunks,
} from "../../../../common/helpers/reduxHook";
import { QuizThunks } from "../../../../store/thunks/quiz.thunks";
import { QuizState } from "../../../../store/reducers/quiz.reducer";
import { InputTime } from "../../../ui/InputTime";
import { InputDate } from "../../../ui/InputDate";
import { InputText } from "../../../ui/InputText";

export const SecondSectionAlergoCod = () => {
  const { addQuizAnswerThunk } = useThunks(QuizThunks);
  const { quizList } = useAppSelector(QuizState);

  const [startTimeOfSimptomsHh, setStartTimeOfSimptomsHh] =
    useState<string>("00");
  const [startTimeOfSimptomsMm, setStartTimeOfSimptomsMm] =
    useState<string>("00");

  const [timeOfCallingHh, setTimeOfCallingHh] = useState<string>("00");
  const [timeOfCallingMm, setTimeOfCallingMm] = useState<string>("00");

  const [timeOfArrivingHh, setTimeOfArrivingHh] = useState<string>("00");
  const [timeOfArrivingMm, setTimeOfArrivingMm] = useState<string>("00");

  const [dateOfReview, setDateOfReview] = useState<string>("");
  const [timeOfReviewHh, setTimeOfReviewHh] = useState<string>("00");
  const [timeOfReviewMm, setTimeOfReviewMm] = useState<string>("00");
  const [nameOfParamedic, setNameOfParamedic] = useState<string>("");
  const [numberOfBrigade, setNumberOfBrigade] = useState<string>("");

  const onBlurHandler = (name: string, value: any) => {
    addQuizAnswerThunk({
      params: {
        [name]: value,
      },
    });
  };

  useEffect(() => {
    if (quizList) {
      quizList?.startTimeOfSimptomsHh
        ? setStartTimeOfSimptomsHh(quizList?.startTimeOfSimptomsHh)
        : setStartTimeOfSimptomsHh("00");
      quizList?.startTimeOfSimptomsMm
        ? setStartTimeOfSimptomsMm(quizList?.startTimeOfSimptomsMm)
        : setStartTimeOfSimptomsMm("00");
      quizList?.timeOfCallingHh
        ? setTimeOfCallingHh(quizList?.timeOfCallingHh)
        : setTimeOfCallingHh("00");
      quizList?.timeOfCallingMm
        ? setTimeOfCallingMm(quizList?.timeOfCallingMm)
        : setTimeOfCallingMm("00");
      quizList?.timeOfArrivingHh
        ? setTimeOfArrivingHh(quizList?.timeOfArrivingHh)
        : setTimeOfArrivingHh("00");
      quizList?.timeOfArrivingMm
        ? setTimeOfArrivingMm(quizList?.timeOfArrivingMm)
        : setTimeOfArrivingMm("00");
      quizList?.dateOfReview
        ? setDateOfReview(quizList?.dateOfReview)
        : setDateOfReview("");
      quizList?.timeOfReviewHh
        ? setTimeOfReviewHh(quizList?.timeOfReviewHh)
        : setTimeOfReviewHh("00");
      quizList?.timeOfReviewMm
        ? setTimeOfReviewMm(quizList?.timeOfReviewMm)
        : setTimeOfReviewMm("00");
      quizList?.nameOfParamedic
        ? setNameOfParamedic(quizList?.nameOfParamedic)
        : setNameOfParamedic("");
      quizList?.numberOfBrigade
        ? setNumberOfBrigade(quizList?.numberOfBrigade)
        : setNumberOfBrigade("");
    }
  }, [quizList]);

  return (
    <div className={s.SecondSection}>
      <Title>Раздел 2: Информация о вызове</Title>
      <div className={s.field}>
        <div className={s.wraperBlockOfTimes}>
          <div className={s.whiteBox}>
            <InputTime
              title={"Время начала симптомов"}
              valueHh={startTimeOfSimptomsHh}
              valueMm={startTimeOfSimptomsMm}
              onChangeHh={(str) => setStartTimeOfSimptomsHh(str)}
              onChangeMm={(str) => setStartTimeOfSimptomsMm(str)}
              onBlurHh={() =>
                onBlurHandler(
                  "startTimeOfSimptomsHh",
                  !startTimeOfSimptomsHh
                    ? "00"
                    : startTimeOfSimptomsHh.length === 1
                    ? `0${startTimeOfSimptomsHh}`
                    : startTimeOfSimptomsHh
                )
              }
              onBlurMm={() => {
                onBlurHandler(
                  "startTimeOfSimptomsMm",
                  !startTimeOfSimptomsMm
                    ? "00"
                    : startTimeOfSimptomsMm.length === 1
                    ? `0${startTimeOfSimptomsMm}`
                    : startTimeOfSimptomsMm
                );
              }}
            />
          </div>
          <div className={s.whiteBox}>
            <InputTime
              title={"Время поступления вызова"}
              valueHh={timeOfCallingHh}
              valueMm={timeOfCallingMm}
              onChangeHh={(str) => setTimeOfCallingHh(str)}
              onChangeMm={(str) => setTimeOfCallingMm(str)}
              onBlurHh={() =>
                onBlurHandler(
                  "timeOfCallingHh",
                  !timeOfCallingHh
                    ? "00"
                    : timeOfCallingHh.length === 1
                    ? `0${timeOfCallingHh}`
                    : timeOfCallingHh
                )
              }
              onBlurMm={() => {
                onBlurHandler(
                  "timeOfCallingMm",
                  !timeOfCallingMm
                    ? "00"
                    : timeOfCallingMm.length === 1
                    ? `0${timeOfCallingMm}`
                    : timeOfCallingMm
                );
              }}
            />
          </div>
          <div className={s.whiteBox}>
            <InputTime
              title={"Время прибытия на место"}
              valueHh={timeOfArrivingHh}
              valueMm={timeOfArrivingMm}
              onChangeHh={(str) => setTimeOfArrivingHh(str)}
              onChangeMm={(str) => setTimeOfArrivingMm(str)}
              onBlurHh={() =>
                onBlurHandler(
                  "timeOfArrivingHh",
                  !timeOfArrivingHh
                    ? "00"
                    : timeOfArrivingHh.length === 1
                    ? `0${timeOfArrivingHh}`
                    : timeOfArrivingHh
                )
              }
              onBlurMm={() => {
                onBlurHandler(
                  "timeOfArrivingMm",
                  !timeOfArrivingMm
                    ? "00"
                    : timeOfArrivingMm.length === 1
                    ? `0${timeOfArrivingMm}`
                    : timeOfArrivingMm
                );
              }}
            />
          </div>
        </div>
        <div className={s.dateOfReviewContainer}>
          <div className={s.wraper}>
            <span>Дата и время осмотра</span>
            <InputDate
              valueDate={dateOfReview}
              max={new Date().toISOString().split("T")[0]}
              onChangeDate={(e) => setDateOfReview(e.target.value)}
              onBlur={() => {
                onBlurHandler("dateOfReview", dateOfReview);
              }}
            />
          </div>
          <div className={s.whiteBox}>
            <InputTime
              title={""}
              valueHh={timeOfReviewHh}
              valueMm={timeOfReviewMm}
              onChangeHh={(str) => setTimeOfReviewHh(str)}
              onChangeMm={(str) => setTimeOfReviewMm(str)}
              onBlurHh={() =>
                onBlurHandler(
                  "timeOfReviewHh",
                  !timeOfReviewHh
                    ? "00"
                    : timeOfReviewHh.length === 1
                    ? `0${timeOfReviewHh}`
                    : timeOfReviewHh
                )
              }
              onBlurMm={() => {
                onBlurHandler(
                  "timeOfReviewMm",
                  !timeOfReviewMm
                    ? "00"
                    : timeOfReviewMm.length === 1
                    ? `0${timeOfReviewMm}`
                    : timeOfReviewMm
                );
              }}
            />
          </div>
        </div>
        <InputText
          title={"ФИО фельдшера"}
          onChange={(e) => setNameOfParamedic(e.target.value)}
          value={nameOfParamedic}
          onBlur={() => onBlurHandler("nameOfParamedic", nameOfParamedic)}
        />
        <InputText
          title={"Номер бригады / ПМСП"}
          onChange={(e) => setNumberOfBrigade(e.target.value)}
          value={numberOfBrigade}
          onBlur={() => onBlurHandler("numberOfBrigade", numberOfBrigade)}
        />
      </div>
    </div>
  );
};
