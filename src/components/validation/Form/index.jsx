import React from 'react';

/**
 * @param {{children: JSX.Element, handleSubmit: Function, submitAction: Function, cancelAction: Function}}
 */
const Form = ({ children, handleSubmit, submitAction, cancelAction }) => {
  const handleSubmitData = handleSubmit(data => submitAction(data));

  return (
    <div className="container p-3">
      <form onSubmit={handleSubmitData} noValidate>
        <div>{children}</div>
        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={cancelAction}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
