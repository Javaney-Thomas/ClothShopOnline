export default function AskQuestion() {
  return (
    <div className="dropdown2">
      <div>
        <div>
          <div className="askaquestion">Ask a question</div>
          <div className="requiredfield"> Indicates a required field</div>
          <div className="question"> Question:</div>
          <input className="questionbox" type="text"></input>
        </div>

        <div>
          <div className="name"> Use your name: </div>
          <div className="email"> Email: </div>
        </div>

        <div className="inputnameEmail">
          <input className="namebox" type="text"></input>
          <input className="emailbox" type="text"></input>
        </div>
      </div>
    </div>
  );
}