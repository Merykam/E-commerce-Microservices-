import React from 'react';
import Header from '../../components/Header/index';
const SuccessPage = () => {
  const styleContent = `
    body {
      text-align: center;
      background: #EBF0F5;
    }
    h1 {
      color: #88B04B;
      font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
      font-weight: 900;
      font-size: 40px;
      margin-bottom: 10px;
    }
    p {
      color: #404F5E;
      font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
      font-size: 20px;
      margin: 0;
    }
    i {
      color: #9ABC66;
      font-size: 100px;
      line-height: 200px;
      margin-left: -15px;
    }
    .card {
      background: white;
      padding: 60px;
      border-radius: 4px;
      box-shadow: 0 2px 3px #C8D0D8;
      display: inline-block;
      margin:  20px;
    }
  `;

  return (
    <div>
      <Header/>
      <style dangerouslySetInnerHTML={{ __html: styleContent }} />
      <div className="card">
        <div style={{ borderRadius: '200px', height: '200px', width: '200px', background: '#F8FAF5', margin: '0 auto' }}>
          <i className="checkmark">✓</i>
        </div>
        <h1>Success</h1>
        <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
      </div>
    </div>
  );
};

export default SuccessPage;
