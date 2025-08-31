import React, { useState } from "react";
import { X } from "lucide-react";
import "./bodyModal.css";

interface BodyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (selected: string[]) => void;
}

const zones = [
  { id: "A", top: "7%", left: "50%" },
  { id: "13", top: "25%", left: "50%" },
  { id: "1", top: "35%", left: "28%" },
  { id: "1i", top: "35%", left: "72%" },
  { id: "2", top: "50%", left: "28%" },
  { id: "2i", top: "50%", left: "72%" },
  { id: "B", top: "60%", left: "50%" },
  { id: "C", top: "80%", left: "50%" },
];

const BodyModal: React.FC<BodyModalProps> = ({ isOpen, onClose, onSave }) => {
  const [selectedZones, setSelectedZones] = useState<string[]>([]);

  if (!isOpen) return null;

  const toggleZone = (zone: string) => {
    setSelectedZones((prev) =>
      prev.includes(zone) ? prev.filter((z) => z !== zone) : [...prev, zone]
    );
  };

  const handleSave = () => {
    onSave(selectedZones);
    onClose();
  };

  const handleReset = () => {
    setSelectedZones([]);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Закрити */}
        <button
          type="button"
          title="button"
          className="close-btn"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <h2 className="modal-title">Оберіть уражені області</h2>

        <div className="image-wrapper">
          <img src="/doctor_burn.jpg" alt="Body zones" className="body-img" />

          {zones.map((zone) => (
            <button
              type="button"
              title="button"
              key={zone.id}
              className={`zone-btn ${
                selectedZones.includes(zone.id) ? "selected" : ""
              }`}
              style={{ top: zone.top, left: zone.left }}
              onClick={() => toggleZone(zone.id)}
            >
              {zone.id}
            </button>
          ))}
        </div>

        <div className="actions">
          <button
            type="button"
            title="button"
            className="save-btn"
            onClick={handleSave}
          >
            Зберегти
          </button>
          <button
            type="button"
            title="button"
            className="reset-btn"
            onClick={handleReset}
          >
            Скинути
          </button>
        </div>
      </div>
    </div>
  );
};

export default BodyModal;
