  "use client";

  import { useState, useEffect } from "react";
  import { getPatient } from "@/services/ApiService";
  import { Steps, Panel, Button, ButtonGroup } from "rsuite";
  import { useParams, useRouter } from "next/navigation";
  import "@splidejs/react-splide/css";
  import SurgicalData from "../FormCalculation/SurgicalData";
  import Ultrasound from "../FormCalculation/Ultrasound";
  import ACM from "../FormCalculation/ACM";
  import CasiaFormulas from "../FormCalculation/CasiaFormulas";
  import WTW from "../FormCalculation/WTW";
  import Image from "next/image";
  import ArrowBack from "../../../public/icons/arrow-back.png";
  import Collapse from "@/components/Collapse/Collapse";


  import { Splide, SplideSlide } from "@splidejs/react-splide";

  import ButtonForm from "../Button/ButtonForm";
  import CalculationGraphicData from "../CalculationsPatient/CalculationGraphicData";

  const AddCalculation = ({handleReturnClick}) => {
    const [step, setStep] = useState(0);
    const [activeStep, setActiveStep] = useState(step);
    const [showCalculation, setShowCalculation] = useState(false);
    const { id } = useParams();
    const router = useRouter();
    console.log("ID recibido en Calculations: ", id);
    const [patient, setPatient] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

    // TRAIGO DATOS DESDE /patients/patients/{id}
    useEffect(() => {
        const fetchPantientData = async () => {
            try {
                // setIsLoading(true);
                const patientData = await getPatient(id);
                console.log("TRAIGO PACIENTE: ", patientData);
                setPatient(patientData);
            } catch (error) {
                console.error("Error fetching data: ", error);
                // setError("Failed to load patient data");
            }
            // finally {
            //     setIsLoading(false);
            // }
        }
        fetchPantientData();
    }, [id]);

    const onChange = (nextStep) => {
      setStep(nextStep < 0 ? 0 : nextStep > 5 ? 5 : nextStep);
      setActiveStep(nextStep); // Actualiza activeStep para resaltar el paso
    };

    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);

    // Array de componentes FORMULARIOS para que renderice en cada paso (step)
    const cards = [
      <SurgicalData key="surgical-data" />,
      <Ultrasound key="ultrasound" />,
      <ACM key="acm" />,
      <CasiaFormulas key="casia" />,
      <WTW key="wtw" />,
    ];

    const stepTitles = [
      "Surgical Data",
      "Ultrasound",
      "Anterior chamber Measurements",
      "Casia 2 formulas",
      "WTW (required for reference and validation only)",
    ];

    // Muestra componente para edición
    const viewResult = () => {
      setShowCalculation(true);
    };

    // Retorna a la vista anterior
    // const handleReturnClick = () => {
    //   setShowCalculation(false);
    // };

    // const handleReturn = () => {
    //   router.back();
    // };
    return (
      <section className="col-10 col-md-12 px-5 mx-auto">
        {showCalculation ? (
          <CalculationGraphicData handleReturnClick={handleReturnClick} />
        ) : (
          <>
              <span className="d-block p-2">
              <a onClick={ handleReturnClick } className="text-uppercase text-decoration-none" style={{color: "#666666", fontSize:"18px", cursor: "pointer"}}><Image src={ ArrowBack }  alt="Ícono de retroceso" className="icon-arrow" /> Return</a>
          </span>
          <h1 className="text-center mb-3 text-uppercase">Patient</h1>

          { patient ? (
          <div className="d-flex justify-content-evenly mb-5">
              <div>
              <h4 className="mb-1 fs-4 fw-bold">
                          Patient: <small class="text-muted">{`${patient.name} ${patient.surname}`}</small>
                      </h4>
                      <h4 className="mb-1 fs-4 fw-bold">
                      Patient ID: <small class="text-muted">{`${patient.id}`}</small>
                      </h4>
              </div>

              <div>
              <h4 className="mb-1 fs-4 fw-bold">
                      DOB: <small class="text-muted">{`${patient.dob}`}</small>
                      </h4>
                  <h4 className="mb-1 fs-4 fw-bold">
                  Medical Record Number (MRN): <small class="text-muted">{`${patient.medical_record}`}</small>
                      </h4>
              </div>
          </div>
      ) : (
          <p>Loading patient data...</p>
      )}

    {/* Collapse de imagenes  */}
      <Collapse />

      <div className="d-flex justify-content-between align-items-center mb-5">
              <ButtonForm
                title="CALCULATE"
                bgColor="#B02F92"
                textColor="#fefefe"
                rounded="2rem"
                textTransform="uppercase"
                disabled={true} // Deshabilitado para cálculo
              />
              <ButtonForm
                title="VIEW RESULT"
                bgColor="#B02F92"
                textColor="#fefefe"
                rounded="2rem"
                textTransform="uppercase"
                onClick={viewResult}
              />
            </div>

            <Splide
              options={{
                type: "slide",
                perPage: 5,
                focus: "center",
                gap: "1px",
                pagination: false,
                arrows: false,
                breakpoints: {
                  768: {
                    perPage: 1,
                  },
                },
              }}
            >
              {stepTitles.map((title, index) => (
                <SplideSlide key={index}>
                  <Steps.Item
                    title={title}
                    description="Incomplete"
                    onClick={() => setStep(index)}
                    id="step"
                    style={{
                      cursor: "pointer",
                      color: activeStep === index ? "#ffffff" : "#000",
                      backgroundColor:
                        activeStep === index ? "#00507C" : "transparent",
                      padding: "5px",
                    }}
                  />
                </SplideSlide>
              ))}
            </Splide>

            <hr
              style={{ border: "0px"}}
            />

      <ButtonGroup>
      <div className="d-flex justify-content-between">
        <Button onClick={onPrevious} disabled={step === 0}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={step === 4}>
          Next
        </Button>
      </div>
      </ButtonGroup>
            <Panel>
              {cards[step]}
              </Panel>
          </>
        )}

      </section>
    );
  };

  export default AddCalculation;
