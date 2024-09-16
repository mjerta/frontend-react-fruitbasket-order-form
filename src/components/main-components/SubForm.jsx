// Constants
import {inputs} from '../../constants/form-validations.js';

import {useForm} from 'react-hook-form';
import Input from "../input-components/Input.jsx";
import SelectBox from "../input-components/SelectBox.jsx";
import RadioButtons from "../input-components/RadioButtons.jsx";
import TextArea from "../input-components/TextArea.jsx";
import Button from "../input-components/Button.jsx";

function SubForm({handleOnSubmit}) {


   // react hook form
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      radioInput: 'overdag'
    }
  });

  return (
    // <form autoComplete="off" onSubmit={handleOnSubmit} className="sub-form">
    <form autoComplete="off" onSubmit={handleSubmit((data) => {
      handleOnSubmit(data);
    })} className="sub-form">
      {
        inputs.map((input) => (
          <Input
            className="labels-inputs "
            inputClassName={input.className}
            key={input.name}
            text={input.text}
            name={input.name}
            register={register}
            type={input.type}
            required={input.required}
            minAge={input.minAge}
            maxAge={input.maxAge}
            errors={errors}
            maxLength={input.maxLength}
            pattern={input.pattern}
          />
        ))
      }
      <SelectBox
        className="labels-inputs"
        name={"frequency"}
        options={['iedere week', 'om de week', 'iedere maand']}
        labelText={"Bezorgfrequentie"}
        register={register}
      />
      <RadioButtons
        className="labels-inputs"
        options={['overdag', "avond"]}
        register={register}
      />
      <TextArea
        name={"textAreaInput"}
        rows={6}
        register={register}
        textLabel={"Opmerking"}
      />
      <Input
        className="labels-inputs"
        spanClass="check-box-span"
        errorMessage="U moet akkoord gaan de algemene voorwaarden."
        text={"Ik ga akkoord meet de voorwaarden"}
        name={"checkBox"}
        required={true}
        register={register}
        type={"checkbox"}
        errors={errors}
      />
      <Button
        type="submit"
        className="main-button"
        buttonText={"Verzend"}
      />
    </form>
  )
}

export default SubForm;