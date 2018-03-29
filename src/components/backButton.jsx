import React from 'react';

const BackButton = (props) => <div className="backButton">
                                   <button onClick={()=>window.history.go(-1)}>Back</button>
                              </div>

export default BackButton;