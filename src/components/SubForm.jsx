import React from 'react';
import {useForm} from 'react-hook-form';
function SubForm(props) {
  const inputFields = [
    {
      tag: "fist-name",
      textBefore: "voornaam",
      type: "text"
    },
    {
      tag: "last-name",
      textBefore: "achternaam",
      type: "text"
    },
    {
      tag: "age",
      textBefore: "leeftijd",
      type: "text",
      initialValue: 0
    },
    {
      tag: "zipCode",
      textBefore: "postcode",
      type: "text"
    },
    {
      className: "delivery-frequency",
      tag: "delivery-frequency",
      textBefore: "BezorgFrequentie",
      type: "select",
      select: ['iedere week', 'om de week', 'iedere maand']
    },
    {
      tag: "time-stack",
      type: "radio",
      radio: ["overdag", "s'avonds"]
    },
    {
      className: "comments",
      tag: "comments",
      textBefore: "Opmerking",
      type: "textarea"
    },

    {
      tag: "checkbox",
      textBefore: "Ik ga akkoord met de voorwaarden",
      type: "checkbox"
    },
    {
      tag: "submit-button",
      text: "verzend",
      type: "submit"
    }

  ]
  const {
      register,
    } = useForm();

  return (
    <form className="sub-form">
      {inputFields.map((field) => (
          <label className={field.className} key={field.tag} htmlFor={field.tag}>
            <span className="text-before-input">{field.textBefore}</span>
            {field.type === "select" &&
              <select name={field.tag} id={field.tag}>
                {
                  field.select.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))
                }
              </select>
            }
            {field.type === "text" &&
              <input
                id={field.tag}
                type={field.type}
              />
            }
            {field.type === "radio" && (
              <div className="time-stack">
                {field.radio.map((option, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name={field.tag}  // Use same name for the group
                      value={option}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
            {
              field.type === "textarea" && (
                <textarea
                  name={field.tag}
                  rows="10">
                  </textarea>
              )
            }
            {
              field.type === "checkbox" && (
                <input
                  id={field.tag}
                  type={field.type}
                />
              )
            }
            {
              field.type === "submit" && (
                <button
                  id={field.tag}
                  name={field.tag}
                  type={field.type}
                >
                  {field.text}
                </button>
              )
            }
          </label>
        )
      )}
    </form>
  )
}

export default SubForm;