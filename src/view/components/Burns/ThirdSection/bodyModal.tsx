import React from "react";
import { X } from "lucide-react";
import { QuizThunks } from "../../../../store/thunks/quiz.thunks";
import { useThunks } from "../../../../common/helpers/reduxHook";
import "./bodyModal.css";
import { useOnBlurHandler } from "../../../../common/helpers/useOnBlurHandler";

interface BodyModalProps {
  isOpen: boolean;
  selectedZones: string[];
  setSelectedZones: React.Dispatch<React.SetStateAction<string[]>>;
  onClose: () => void;
}

const zones = [
  // Перед
  { id: "head-front", label: "Голова (перед)", top: "6%", left: "21%" },
  { id: "neck-front", label: "Шея (перед)", top: "16%", left: "21%" },
  { id: "chest", label: "Грудь", top: "25%", left: "21%" },
  {
    id: "arm-right-upper-front",
    label: "Правая рука (верх)",
    top: "25%",
    left: "10%",
  },
  {
    id: "arm-right-lower-front",
    label: "Правая рука (низ)",
    top: "40%",
    left: "8%",
  },
  {
    id: "arm-left-upper-front",
    label: "Левая рука (верх)",
    top: "25%",
    left: "32%",
  },
  {
    id: "arm-left-lower-front",
    label: "Левая рука (низ)",
    top: "40%",
    left: "34%",
  },
  { id: "abdomen", label: "Живот", top: "40%", left: "21%" },
  { id: "pelvis-front", label: "Таз (перед)", top: "50%", left: "21%" },
  {
    id: "leg-right-thigh-front",
    label: "Правая нога (бедро)",
    top: "60%",
    left: "16%",
  },
  {
    id: "leg-left-thigh-front",
    label: "Левая нога (бедро)",
    top: "60%",
    left: "26%",
  },
  {
    id: "leg-right-shin-front",
    label: "Правая нога (голень)",
    top: "80%",
    left: "16%",
  },
  {
    id: "leg-left-shin-front",
    label: "Левая нога (голень)",
    top: "80%",
    left: "26%",
  },
  { id: "foot-right-front", label: "Стопа правая", top: "95%", left: "14%" },
  { id: "foot-left-front", label: "Стопа левая", top: "95%", left: "28%" },

  // Спина
  { id: "head-back", label: "Голова (зад)", top: "6%", left: "68%" },
  { id: "neck-back", label: "Шея (зад)", top: "14%", left: "68%" },
  { id: "back-upper", label: "Спина (верх)", top: "25%", left: "68%" },
  {
    id: "arm-right-upper-back",
    label: "Правая рука (зад, верх)",
    top: "25%",
    left: "79%",
  },
  {
    id: "arm-right-lower-back",
    label: "Правая рука (зад, низ)",
    top: "40%",
    left: "82%",
  },
  {
    id: "arm-left-upper-back",
    label: "Левая рука (зад, верх)",
    top: "25%",
    left: "57%",
  },
  {
    id: "arm-left-lower-back",
    label: "Левая рука (зад, низ)",
    top: "40%",
    left: "54%",
  },
  { id: "lower-back", label: "Поясница", top: "40%", left: "68%" },
  { id: "buttock-right", label: "Правая ягодица", top: "50%", left: "72%" },
  { id: "buttock-left", label: "Левая ягодица", top: "50%", left: "64%" },
  {
    id: "leg-right-thigh-back",
    label: "Правая нога (бедро, зад)",
    top: "60%",
    left: "74%",
  },
  {
    id: "leg-left-thigh-back",
    label: "Левая нога (бедро, зад)",
    top: "60%",
    left: "62%",
  },
  {
    id: "leg-right-shin-back",
    label: "Правая нога (голень, зад)",
    top: "80%",
    left: "74%",
  },
  {
    id: "leg-left-shin-back",
    label: "Левая нога (голень, зад)",
    top: "80%",
    left: "62%",
  },
  {
    id: "foot-right-back",
    label: "Стопа правая (зад)",
    top: "95%",
    left: "74%",
  },
  { id: "foot-left-back", label: "Стопа левая (зад)", top: "95%", left: "62%" },

  // Дополнительно для точности (локти, кисти)
  {
    id: "hand-right-front",
    label: "Правая кисть (перед)",
    top: "53%",
    left: "0%",
  },
  {
    id: "hand-left-front",
    label: "Левая кисть (перед)",
    top: "53%",
    left: "38%",
  },
  {
    id: "hand-right-back",
    label: "Правая кисть (зад)",
    top: "53%",
    left: "90%",
  },
  { id: "hand-left-back", label: "Левая кисть (зад)", top: "53%", left: "50%" },
];

const BodyModal: React.FC<BodyModalProps> = ({
  isOpen,
  selectedZones,
  setSelectedZones,
  onClose,
}) => {
  const { addQuizAnswerThunk } = useThunks(QuizThunks);
  const { onBlurHandler } = useOnBlurHandler({ addQuizAnswerThunk });

  if (!isOpen) return null;

  const toggleZone = (zone: string) => {
    setSelectedZones((prev) =>
      prev.includes(zone) ? prev.filter((z) => z !== zone) : [...prev, zone]
    );
  };

  const handleSave = () => {
    onBlurHandler("selectedZones", selectedZones.join(","));

    const selectedLabels = zones
      .filter((z) => selectedZones.includes(z.id))
      .map((z) => z.label);

    onBlurHandler("selectedZonesCyrillic", selectedLabels.join(","));
    onClose();
  };

  const handleReset = () => {
    setSelectedZones([]);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button
          title="close"
          type="button"
          className="close-btn"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <h2 className="modal-title">Выберите пораженные области</h2>

        <div className="image-wrapper">
          <img src="/doctor_burn.jpg" alt="Body zones" className="body-img" />
          {zones.map((zone) => (
            <button
              key={zone.id}
              type="button"
              className={`zone-btn ${
                selectedZones.includes(zone.id) ? "selected" : ""
              }`}
              style={{ top: zone.top, left: zone.left }}
              onClick={() => toggleZone(zone.id)}
              title={zone.label}
            />
          ))}
        </div>

        <div className="actions">
          <button type="button" className="save-btn" onClick={handleSave}>
            Сохранить
          </button>
          <button type="button" className="reset-btn" onClick={handleReset}>
            Очистить все
          </button>
        </div>
      </div>
    </div>
  );
};

export default BodyModal;
