import React, { useState } from 'react';

function ReviewBody({ bodyText, setBodyText }) {
  const [minBody, setMinBody] = useState('50');

  const onChange = (e) => {
    e.preventDefault();
    setBodyText(e.target.value);
    setMinBody('50' - bodyText.length);
    if (bodyText.length >= 50) {
      setMinBody('Minimum reached.');
    }
  };

  return (
    <section className="review-body">
      <label>
        Review Body
        <sup>*</sup>
      </label>
      <br />
      <textarea
        name="body"
        maxLength="1000"
        aria-label="summary-body"
        rows="10"
        cols="70"
        placeholder="Why did you like the product or not?"
        onChange={onChange}
      />
      <br />
      <small style={{ color: 'gray' }}>
        Minimum required characters left:
        {minBody}
      </small>
    </section>
  );
}

export default ReviewBody;
