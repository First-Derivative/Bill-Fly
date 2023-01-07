import { EffectObject } from "./App"
import { Col } from "react-bootstrap"

function Effect({ effect, handleUpdate }: { effect: EffectObject, handleUpdate: Function }) {
  return (
    <Col className="col-12 ptr" onClick={e => handleUpdate(effect.id)}>
      <div className={`alert alert-${effect.value > 0 ? "success" : "danger"}`} role="alert">
        {effect.text}:
        {effect.value}
      </div>
    </Col>
  )
}

export default Effect