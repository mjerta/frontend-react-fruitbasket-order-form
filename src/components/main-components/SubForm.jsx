// Constants
import {inputs} from '../../constants/form-validations.js';

// import {useForm} from 'react-hook-form';
import Input from "../input-components/Input.jsx";
import SelectBox from "../input-components/SelectBox.jsx";
import RadioButtons from "../input-components/RadioButtons.jsx";
import TextArea from "../input-components/TextArea.jsx";
import Button from "../input-components/Button.jsx";

function SubForm({state, handleOnChange, handleOnSubmit}) {

  return (
    <form autoComplete="off" onSubmit={handleOnSubmit} className="sub-form">
      {
        inputs.map((input) => (
          <Input
            className="labels-inputs"
            key={input.name}
            text={input.text}
            name={input.name}
            type={input.type}
            state={state[input.name]}
            handleOnChange={handleOnChange}
          />
        ))
      }
      <SelectBox
        className="labels-inputs"
        name={"frequency"}
        options={['iedere week', 'om de week', 'iedere maand']}
        handleOnChange={handleOnChange}
        labelText={"Bezorgfrequentie"}
      />
      <RadioButtons
        className="labels-inputs"
        options={['overdag', "avond"]}
        handleOnChange={handleOnChange}
        state={state.radioInput}
      />
      <TextArea
        name={"textAreaInput"}
        rows={6}
        state={state.textAreaInput}
        handleOnChange={handleOnChange}
        textLabel={"Opmerking"}
      />
      <Input
        className="labels-inputs"
        spanClass="check-box-span"
        text={"Ik ga akkoord meet de voorwaarden"}
        name={"checkBox"}
        type={"checkbox"}
        state={state.checkBox}
        handleOnChange={handleOnChange}
      />
      <Button
        type="submit"
        buttonText={"Verzend"}
      />
    </form>
  )
}

export default SubForm;