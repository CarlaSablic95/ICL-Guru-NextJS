"use client";

import { useState } from "react";
import { Steps, Panel, ButtonGroup, Button } from 'rsuite';
import FormIntraoperative from "../FollowUpForms/FormIntraoperative";
import FormControl from "../FollowUpForms/FormControl";
import Image from "next/image";
import Graphic from "../../../public/img/graphic.png";

const FollowUpWizard = () => {
  const [step, setStep] = useState(0);
  const [activeStep, setActiveStep] = useState(step);
  const [stepTitles, setStepTitles] = useState(["Intraoperative"]);
  const [formControl, setFormControl] = useState([<FormIntraoperative key="intraoperative" />]);
  const [customValue, setCustomValue] = useState(1); // Valor predeterminado
  const [customUnit, setCustomUnit] = useState("days"); // Unidad predeterminada

  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > formControl.length - 1 ? formControl.length - 1 : nextStep);
    setActiveStep(nextStep);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

  // Función para generar el título según el protocolo de control
  const generateTitle = (value, unit) => {
    const unitMapping = {
      days: "D",
      months: "M",
      years: "Y"
    };
    return `Postoperative ${value}${unitMapping[unit] || ""}`;
  };

  // Función para calcular un valor numérico total en función de la unidad de tiempo para ordenar cronológicamente
  const calculateTimeValue = (value, unit) => {
    const unitMultiplier = {
      days: 1,
      months: 30,
      years: 365
    };
    return value * (unitMultiplier[unit] || 1); // Multiplicar por los días
  };

  // Función para manejar el agregar de un nuevo control cronológicamente
  const handleAddControl = () => {
    const newTitle = generateTitle(customValue, customUnit);
    const newForm = <FormControl key={newTitle} title={newTitle} />;
    const newTimeValue = calculateTimeValue(customValue, customUnit);

    // Insertar en el lugar correcto basado en el valor total de días
    const insertIndex = stepTitles.findIndex((title, index) => {
      const currentUnit = title.match(/[DYM]/)?.[0] || "D";
      const currentValue = parseInt(title.match(/\d+/)?.[0] || "0", 10);
      return calculateTimeValue(currentValue, currentUnit.toLowerCase()) > newTimeValue;
    });

    const indexToInsert = insertIndex === -1 ? stepTitles.length : insertIndex;

    // Insertar el nuevo control en la posición correcta
    setStepTitles((prevTitles) => {
      const updatedTitles = [...prevTitles];
      updatedTitles.splice(indexToInsert, 0, newTitle);
      return updatedTitles;
    });

    setFormControl((prevForms) => {
      const updatedForms = [...prevForms];
      updatedForms.splice(indexToInsert, 0, newForm);
      return updatedForms;
    });

    // Mover al nuevo paso
    setStep(indexToInsert);
    setActiveStep(indexToInsert);
  };

  return (
    <section>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5">
        <div className="d-flex">
          <h3 className="my-4">Postoperative</h3>
        </div>
        <button type="button" className="btn py-2 px-4 border-0 mb-3 mb-md-0" style={{ backgroundColor: "#59B03D", color: "#fefefe", borderRadius: "2rem" }}>
          Exported to Excel
        </button>
      </div>

      {/* Inputs para facilitar el control personalizado */}
      <div className="d-flex flex-column flex-md-row justify-content-evenly mb-3">
        <div>
          <p className="fw-bold">Enter a value</p>
          <input
            type="number"
            min="1"
            max="10"
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
            placeholder="Valor"
            className="form-control mb-3"
          />
        </div>
        <div>
          <p className="fw-bold">Enter a value to indicate day, month, or year.</p>
          <select
            value={customUnit}
            onChange={(e) => setCustomUnit(e.target.value)}
            className="form-control mb-3"
          >
            <option value="days">Days</option>
            <option value="months">Month</option>
            <option value="years">Years</option>
          </select>
        </div>
        
        <button
          type="button"
          className="btn py-2 px-4 border-0 mb-4"
          style={{ backgroundColor: "#B02F92", color: "#fefefe", borderRadius: "2rem" }}
          onClick={handleAddControl}
        >
          New control
        </button>
      </div>

      <ButtonGroup className="mb-4">
        <Button onClick={onPrevious} disabled={step === 0}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={step === formControl.length - 1} className="ms-2">
          Next
        </Button>
      </ButtonGroup>

      <Steps current={activeStep} onChange={onChange}>
        {stepTitles.map((title, index) => (
          <Steps.Item
            key={index}
            title={title}
            onClick={() => setStep(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </Steps>

      <hr />
      <Panel>{formControl[step]}</Panel>
      <hr />

      {/* GRÁFICO RESULTADO */}
      <section>
        <div className="d-flex justify-content-end gap-3">
          <div className="form-check form-switch my-4">
            <label className="form-check-label fw-bold" htmlFor="flexSwitchCheckDefault">See new controls</label>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ cursor: "pointer" }} />
          </div>

          <button className="text-white my-4" type="button" style={{ backgroundColor: "#2C98F0" }}>ADD ANOTHER DAY</button>
        </div>

        <div className="col-12">
          <Image src={Graphic} alt="graphic result" className="img-fluid" />
        </div>
      </section>
    </section>
  );
};

export default FollowUpWizard;
