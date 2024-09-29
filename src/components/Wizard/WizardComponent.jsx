"use client";

import { useState } from "react";
import { Steps, Panel, ButtonGroup, Button } from 'rsuite';
import FormIntraoperative from "../FollowUpForms/FormIntraoperative";
import FormIMM from "../FollowUpForms/FormIMM";
import Image from "next/image";
import Graphic from "../../../public/img/graphic.png";

const WizardComponent = () => {
  const [step, setStep] = useState(0);
  const [activeStep, setActiveStep] = useState(step);
  const [stepTitles, setStepTitles] = useState(["Intraoperative"]);
  const [formControl, setFormControl] = useState([<FormIntraoperative key="intraoperative" />]);

  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > formControl.length - 1 ? formControl.length - 1 : nextStep);
    setActiveStep(nextStep); // Actualizar el step activo
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

  // Función para manejar el agregar de un nuevo control
  const handleAddControl = () => {
    const newTitle = `Postoperative IMM ${stepTitles.length + 1}`;
    const newForm = <FormIMM key={newTitle} />;
    
    setStepTitles((prevTitles) => [...prevTitles, newTitle]);
    setFormControl((prevForms) => [...prevForms, newForm]);

    // Mover al nuevo paso
    setStep(stepTitles.length);
    setActiveStep(stepTitles.length);
  };

  return (
    <section>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5">
        <div className="d-flex">
          <h3 className="my-4">Postoperative</h3>
        </div>
        <button type="button" className="btn py-2 px-4 border-0 mb-3 mb-md-0" style={{ backgroundColor: "#59B03D", color: "#fefefe", borderRadius: "2rem"}}>
          Exported to Excel
        </button>
        <button
          type="button"
          className="btn py-2 px-4 border-0"
          style={{ backgroundColor: "#B02F92", color: "#fefefe", borderRadius: "2rem"}}
          onClick={handleAddControl}
        >
          New control
        </button>
      </div>

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

      <ButtonGroup>
        <Button onClick={onPrevious} disabled={step === 0}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={step === formControl.length - 1}>
          Next
        </Button>
      </ButtonGroup>

       {/* GRAPHIC RESULT */}
       <section>
        <div className="d-flex justify-content-end gap-3">
            <div className="form-check form-switch my-4">
              <label className="form-check-label fw-bold" for="flexSwitchCheckDefault">See new controls</label>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{cursor: 
            "pointer"}} />
            </div>

            <button className="text-white my-4" type="button" style={{backgroundColor: "#2C98F0"}}>ADD ANOTHER DAY</button>
        </div>
        
        <div className="col-12">
          <Image src={Graphic} alt="graphic result" className="img-fluid"/>
        </div>
      </section>
    </section>
  );
};

export default WizardComponent;
