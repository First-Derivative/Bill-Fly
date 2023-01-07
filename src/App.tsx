import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap"
import localEffects from "./effects.json"
import "./App.sass";
import Effect from "./Effect";
import EffectsForm from "./EffectsForm";

export interface EffectObject {
  id: number
  text: string
  value: number
}

function App() {

  const [count, setCount] = useState<number>(0)
  const [income, setIncome] = useState<number>(2035)
  const [effects, setEffects] = useState<Array<EffectObject>>(localEffects)
  const [isInvalid, setIsInvalid] = useState<boolean>(false)

  const updateIncome = (e: any) => setIncome(parseInt(e.target.value))
  const removeEffect = (target: number) => setEffects(effects.filter(eff => eff.id === target))
  const updateEffect = (effect: EffectObject) => { setEffects([...effects, effect]); setCount(prev => prev++) }

  const calcIncome = (): string => {
    let net = income
    effects.forEach(eff => {
      net += eff.value
    })
    let output = String(net)
    return output
  }

  return (
    <Container className="root h-75">

      <Container >
        <Row className="mt-3 gy-5">
          {/* <Col className="col-4">
            <div className="d-flex justify-content-end h1">
              Salary:
            </div>
          </Col> */}
          <Col className="col-12 text-center">
            <form className="form-floating">
              <input type="text" className={`form-control ${isInvalid ? "is-invalid" : ""}`} id="salary-input" value={income} placeholder="name@example.com" onChange={e => updateIncome(e)} />
              <label htmlFor="salary-input">Monthly Salary</label>
            </form>
          </Col>
          <Col id="effect-container">
            <Row>
              {effects.map((eff, index) => {
                return (
                  <Effect effect={eff} handleUpdate={removeEffect} key={index} />
                )
              })}
            </Row>
          </Col>
          <Col className="col-12">
            <EffectsForm handleUpdate={updateEffect} id={count} income={income} />
          </Col>
          <Col className="col-12">
            <div className="d-flex justify-content-center h1">
              Disposible Income: {income === 0 ? "Enter a salary!" : `£${calcIncome()}`}
            </div>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default App;
