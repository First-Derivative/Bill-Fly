import { useState } from "react"

function EffectsForm({ id, income, handleUpdate }: { id: number, income: number, handleUpdate: Function }) {
  const [effVal, setEffeVal] = useState<number>(0)
  const [text, setText] = useState<string>("")
  const cleanup = () => { setEffeVal(0); setText("") }

  // updates text/value properties
  const updateEffect = (e: any) => {
    if (e.target.name === "value") {
      setEffeVal(Number(e.target.value))
    } else {
      setText(e.target.value)
    }
  }

  // updates pos/neg values
  const handlePosEffect = () => {
    console.log("pos")
    if (effVal === 0) return
    handleUpdate({ "id": id, "text": text, "value": effVal })
    cleanup()
  }
  const handleNegEffect = () => {
    console.log("neg")
    if (effVal === 0) return
    // setEffeVal(prev => prev * -1)
    handleUpdate({ "id": id, "text": text, "value": -effVal })
    cleanup()
  }

  return (
    <>
      <div className="input-group">
        <button disabled={income === 0} className="btn btn-outline-danger" type="button" onClick={e => handleNegEffect()}>-</button>
        <input type="text" name="text" className="form-control text-center" placeholder="expense" aria-label="expense" value={text} onChange={e => updateEffect(e)} required={true} />
        <input type="number" name="value" step=".01" className="form-control text-center" placeholder="value" aria-label="value" value={effVal} onChange={e => updateEffect(e)} required={true} />
        <button disabled={income === 0} className="btn btn-outline-success" type="button" onClick={e => handlePosEffect()}>+</button>
      </div>
    </>
  )
}

export default EffectsForm