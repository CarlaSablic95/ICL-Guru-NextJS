"use client";

import { useState } from "react";
import { Steps, Panel, ButtonGroup, Button } from 'rsuite';
import '@splidejs/react-splide/css';
import FormIntraoperative from "../FollowUpForms/FormIntraoperative";
import FormIMM from "../FollowUpForms/FormIMM";
import Form1D from "../FollowUpForms/Form1D";
import Form7D from "../FollowUpForms/Form7D";
import Form1M from "../FollowUpForms/Form1M";
import Form3M from "../FollowUpForms/Form3M";
import Form6M from "../FollowUpForms/Form6M";
import Form9M from "../FollowUpForms/Form9M";
import Form1Y from "../FollowUpForms/Form1Y";
import Form3Y from "../FollowUpForms/Form3Y";
import Form5Y from "../FollowUpForms/Form5Y";
import Form10Y from "../FollowUpForms/Form10Y";

import Eye from "../Eyes/EyesOdOs";
import { Splide, SplideSlide } from '@splidejs/react-splide';

import ButtonForm from "../Button/ButtonForm";

const WizardComponent = () => {
  const [step, setStep] = useState(0);
  const [activeStep, setActiveStep] = useState(step);
  const onChange = nextStep => {
    setStep(nextStep < 0 ? 0 : nextStep > 10 ? 10 : nextStep);
    setActiveStep(nextStep); // Update activeStep for highlighting
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

// Array de componentes FORMULARIOS para que renderice en cada paso (step)
const cards = [
    <FormIntraoperative key="intraoperative" />,
    <FormIMM key="imm" />,
    <Form1D key="1-day" />,
    <Form7D key="7-days" />,
    <Form1M key="1-month" />,
    <Form3M key="3-months" />,
    <Form6M key="6-months" />,
    <Form9M key="9-months" />,
    <Form1Y key="1-year" />,
    <Form3Y key="3-years" />,
    <Form5Y key="5-years" />,
    <Form10Y key="10-years" />,
];

const stepTitles = [
  "Intraoperative",
  "IMM",
  "1 Day",
  "7 Days",
  "1 Month",
  "3 Months",
  "6 Months",
  "9 Months",
  "1 Year",
  "3 Years",
  "5 Years",
  "10 Years",
];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="d-flex">
          <h3 className="my-4">Postoperative</h3>
          <Eye title="OD" />
        </div>
            <ButtonForm title="New control" bgColor="#B02F92" textColor="#fefefe"  rounded="2rem" textTransform="uppercase" />
      </div>

      <Splide
        options={{
          type: "slide",
          perPage: 4,
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
      </Splide>


      <hr />
      {/* <Panel header={`PASO: ${step + 1}`}> */}
      <Panel>
        { cards[step]}
      </Panel>
      <hr />
      <ButtonGroup>
        <Button onClick={onPrevious} disabled={step === 0}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={step === 12}>
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
};



export default WizardComponent;