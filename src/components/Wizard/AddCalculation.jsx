"use client";

import { useState } from "react";
import { Steps, Panel, ButtonGroup, Button } from 'rsuite';
import '@splidejs/react-splide/css';
import SurgicalData from "../FormCalculation/SurgicalData";
import Ultrasound from "../FormCalculation/Ultrasound";
import ACM from "../FormCalculation/ACM";
import CasiaFormulas from "../FormCalculation/CasiaFormulas";
import WTW from "../FormCalculation/WTW";

// import { Splide, SplideSlide } from '@splidejs/react-splide';

import ButtonForm from "../Button/ButtonForm";

const AddCalculation = () => {
  const [step, setStep] = useState(0);
  const [activeStep, setActiveStep] = useState(step);
  const onChange = nextStep => {
    setStep(nextStep < 0 ? 0 : nextStep > 5 ? 5 : nextStep);
    setActiveStep(nextStep); // Update activeStep for highlighting
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

// Array de componentes FORMULARIOS para que renderice en cada paso (step)
const cards = [
    <SurgicalData key="surgical-data" />,
    <Ultrasound key="ultrasound" />,
    <ACM key="acm" />,
    <CasiaFormulas key="casia" />,
    <WTW key="wtw" />
];

// const stepTitles = [
//   "Surgical Data",
//   "Ultrasound",
//   "Anterior chamber Measurements",
//   "Casia 2 formulas",
//   "WTW (required for reference and validation only)"
// ];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-5">
        <ButtonForm title="CALCULATE" bgColor="#B02F92" textColor="#fefefe"  rounded="2rem" textTransform="uppercase" />
        <ButtonForm title="VIEW RESULT" bgColor="#B02F92" textColor="#fefefe"  rounded="2rem" textTransform="uppercase" />
      </div>
      <Steps current={step}>
        <Steps.Item title="Surgical Data" description="Description" />
        <Steps.Item title="Ultrasound" description="Description" />
        <Steps.Item title="Anterior chamber Measurements" description="Description" />
        <Steps.Item title="Casia 2 formulas" description="Description" />
        <Steps.Item title="WTW (required for reference and validation only)" description="Description" />
      </Steps>

      {/* <Splide
        options={{
          type: "slide",
          perPage: 5,
          focus: "center",
          gap: "1px",
          pagination: false,
        }}
      >
        {stepTitles.map((title, index) => (
          <SplideSlide key={index}>
            <Steps.Item
              title={title}
              description="Description"
              onClick={() => setStep(index)}
              id="step"
              style={{ 
                cursor: "pointer",
                background: activeStep === index ? "#495AFF" : "none",
                
              }}
            />
          </SplideSlide>
        ))}
      </Splide> */}


      <hr />

      <Panel>
        { cards[step]}
      </Panel>
      <hr />
      <ButtonGroup>
        <Button onClick={onPrevious} disabled={step === 0}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={step === 4}>
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
};



export default AddCalculation;