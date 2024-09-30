"use client";

import { useState } from "react";
import { Steps, Panel, ButtonGroup, Button } from "rsuite";
import FormIntraoperative from "../FollowUpForms/FormIntraoperative";
import FormControl from "../FollowUpForms/FormControl";
import Image from "next/image";
import Graphic from "../../../public/img/graphic.png";
import Eye from "../Eyes/EyesOdOs";

const FollowUpOS = () => {
  const [step, setStep] = useState(0);
  const [activeStep, setActiveStep] = useState(step);
  const [stepTitles, setStepTitles] = useState(["Intraoperative"]);
  const [formControl, setFormControl] = useState([
    <FormIntraoperative key="intraoperative" />,
  ]);
  const [customValue, setCustomValue] = useState(1);
  const [customUnit, setCustomUnit] = useState("Select a time unit");

  const onChange = (nextStep) => {
    setStep(
      nextStep < 0
        ? 0
        : nextStep > formControl.length - 1
        ? formControl.length - 1
        : nextStep
    );
    setActiveStep(nextStep);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

  // Función para generar el título según el protocolo de control
  const generateTitle = (value, unit) => {
    const unitMapping = {
      days: "D",
      months: "M",
      years: "Y",
    };
    return `Postoperative - ${value}${unitMapping[unit] || ""}`;
  };

  // Función para calcular un valor numérico total en función de la unidad de tiempo para ordenar cronológicamente
  const calculateTimeValue = (value, unit) => {
    const unitMultiplier = {
      days: 1,
      months: 30,
      years: 365,
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
      return (
        calculateTimeValue(currentValue, currentUnit.toLowerCase()) >
        newTimeValue
      );
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
          <h3 className="my-4">
            Postoperative{" "}
            <Eye
              bgColor="#2FB297"
              color="#fefefe"
              title="OS"
              width={50}
              height={50}
              fontSize="1.5rem"
            />
          </h3>
        </div>
        <button
          type="button"
          className="btn py-2 px-4 border-0 mb-3 mb-md-0"
          style={{
            backgroundColor: "#59B03D",
            color: "#fefefe",
            borderRadius: "2rem",
          }}
        >
          Exported to Excel
        </button>
      </div>

      {/* Inputs para facilitar el control personalizado */}
      <div className="d-flex flex-column justify-content-center justify-content-md-start align-items-center">
        <h4 className="text-center text-md-start mb-2">Add control</h4>
        <div
          className="col-10 col-md-5 px-2 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-3"
          style={{
            backgroundColor: "#E9F1F8",
            borderRadius: "1rem",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <div>
            <label htmlFor="value fs-4">Enter a value</label>
            <input
              type="number"
              min="1"
              max="10"
              name="value"
              id="value"
              value={customValue}
              onChange={(e) => setCustomValue(e.target.value)}
              placeholder="Value"
              className="form-control mb-3"
            />
          </div>
          <div>
            <label htmlFor="time-unit fs-4">Enter a time unit</label>
            <select
              value={customUnit}
              onChange={(e) => setCustomUnit(e.target.value)}
              className="form-control mb-3"
              name="time-unit"
              id="time-unit"
            >
              <option value>Select a time unit</option>
              <option value="days">Days</option>
              <option value="months">Month</option>
              <option value="years">Years</option>
            </select>
          </div>

          <button
            type="button"
            className="btn py-2 px-4 border-0 mb-4 mb-md-0"
            style={{
              backgroundColor: "#B02F92",
              color: "#fefefe",
              borderRadius: "2rem",
            }}
            onClick={handleAddControl}
          >
            New control
          </button>
        </div>
      </div>

      <Steps current={activeStep} onChange={onChange}>
        {stepTitles.map((title, index) => (
          <Steps.Item
            key={index}
            title={title}
            onClick={() => setStep(index)}
            style={{ cursor: "pointer" }}
            className="mb-4"
          />
        ))}
      </Steps>

      <ButtonGroup className="mb-4">
        <Button onClick={onPrevious} disabled={step === 0}>
          Previous
        </Button>
        <Button
          onClick={onNext}
          disabled={step === formControl.length - 1}
          className="ms-2"
        >
          Next
        </Button>
      </ButtonGroup>

      <hr />
      <Panel>{formControl[step]}</Panel>
      <hr />

      {/* GRÁFICO RESULTADO */}
      <section className="d-flex flex-column justify-content-center">
        <div className="form-check form-switch my-4">
          <label
            className="form-check-label fw-bold"
            htmlFor="flexSwitchCheckDefault"
          >
            See new controls
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="col-10 d-flex justify-content-center">
          <Image src={Graphic} alt="graphic result" className="img-fluid" />
        </div>
      </section>
    </section>
  );
};

export default FollowUpOS;
