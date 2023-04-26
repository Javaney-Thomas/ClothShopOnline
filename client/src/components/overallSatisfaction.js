const OverallSatisfaction = () => {
    return(
<div className="overallsatisfaction">
How would you rate your overall satisfaction with this product?
<div className="radiobtns">
  <div>
    <input type="radio" id="notsatisfied" name="drone" value="notsatisfied"/>
    <label for="notsatisfied">Not satisfied</label>
    <span className="notsatisfiedcontainer">
      <span className="satisfactionbar1"></span>
      <span className="satisfactionbar2"></span>
      <span className="satisfactionbar3"></span>
      <span className="satisfactionbar4"></span>
      <span className="satisfactionbar5"></span>
    </span>
  </div>
  <div>
    <input type="radio" id="somewhatsatisfied" name="drone" value="somewhatsatisfied"/>
    <label for="dewey">Somewhat satisfied</label>
    <span className="somewhatcontainer">
    <span className="somewhatbar1"></span>
      <span className="somewhatbar2"></span>
      <span className="somewhatbar3"></span>
      <span className="somewhatbar4"></span>
      <span className="somewhatbar5"></span>
    </span>
  </div>
  <div>
    <input type="radio" id="satisfied" name="drone" value="satisfied"/>
    <label for="satisfied">Satisfied</label>
    <span className="satisfiedcontainer">
    <span className="satisfiedbar1"></span>
      <span className="satisfiedbar2"></span>
      <span className="satisfiedbar3"></span>
      <span className="satisfiedbar4"></span>
      <span className="satisfiedbar5"></span>
    </span>
  </div>
  <div>
    <input type="radio" id="verysatisfied" name="drone" value="verysatisfied"/>
    <label for="verysatisfied">Very satisfied</label>
    <span className="verycontainer">
    <span className="verybar1"></span>
      <span className="verybar2"></span>
      <span className="verybar3"></span>
      <span className="verybar4"></span>
      <span className="verybar5"></span>
    </span>
  </div>
  <div>
    <input type="radio" id="extremelysatisfied" name="drone" value="extremelysatisfied"/>
    <label for="extremelysatisfied">Extremely satisfied</label>
    <span className="extremelycontainer">
    <span className="extremelybar1"></span>
      <span className="extremelybar2"></span>
      <span className="extremelybar3"></span>
      <span className="extremelybar4"></span>
      <span className="extremelybar5"></span>
    </span>
  </div>
    <div className="bigofproduct">
    How do you find the big of this poduct?
    <div>
    <input type="radio" id="runssmalls" name="drone" value="runssmalls"/>
    <label for="runssmalls">Runs smalls</label>
    <span className="smallcontainer">
    <span className="smallbar1"></span>
      <span className="smallbar2"></span>
      <span className="smallbar3"></span>
      <span className="smallbar4"></span>
      <span className="smallbar5"></span>
      </span>
    </div>
    <div>
    <input type="radio" id="truetosize" name="drone" value="truetosize"/>
    <label for="truetosize">True to size</label>
    <span className="truecontainer">
    <span className="truebar1"></span>
      <span className="truebar2"></span>
      <span className="truebar3"></span>
      <span className="truebar4"></span>
      <span className="truebar5"></span>
      </span>
    </div>
    <div>
    <input type="radio" id="runsbig" name="drone" value="runsbig"/>
    <label for="runsbig">Runs big</label>
    <span className="bigcontainer">
    <span className="bigbar1"></span>
      <span className="bigbar2"></span>
      <span className="bigbar3"></span>
      <span className="bigbar4"></span>
      <span className="bigbar5"></span>
      </span>
    </div>
    <div>
    On a scale from 1 - 5 (5 being best) how would you rate the quality of this product?
    <input type="radio" id="scale1" name="drone" value="scale1"/>
    <label for="scale1">1</label>
    <span className="scale1container">
      <span className="scale1bar1"></span>
      <span className="scale1bar2"></span>
      <span className="scale1bar3"></span>
      <span className="scale1bar4"></span>
      <span className="scale1bar5"></span>
    </span>
    <input type="radio" id="scale2" name="drone" value="scale2"/>
    <label for="scale2">2</label>
    <span className="scale2container">
      <span className="scale2bar1"></span>
      <span className="scale2bar2"></span>
      <span className="scale2bar3"></span>
      <span className="scale2bar4"></span>
      <span className="scale2bar5"></span>
    </span>
    <input type="radio" id="scale3" name="drone" value="scale3"/>
    <label for="scale3">3</label>
    <span className="scale3container">
      <span className="scale3bar1"></span>
      <span className="scale3bar2"></span>
      <span className="scale3bar3"></span>
      <span className="scale3bar4"></span>
      <span className="scale3bar5"></span>
    </span>
    <input type="radio" id="scale4" name="drone" value="scale4"/>
    <label for="scale4">4</label>
    <span className="scale4container">
      <span className="scale4bar1"></span>
      <span className="scale4bar2"></span>
      <span className="scale4bar3"></span>
      <span className="scale4bar4"></span>
      <span className="scale4bar5"></span>
    </span>
    <input type="radio" id="scale5" name="drone" value="scale5"/>
    <label for="scale5">5</label>
    <span className="scale5container">
      <span className="scale5bar1"></span>
      <span className="scale5bar2"></span>
      <span className="scale5bar3"></span>
      <span className="scale5bar4"></span>
      <span className="scale5bar5"></span>
    </span>
    <div> Which of the following best describes your delivery experience?
    <input type="radio" id="early" name="drone" value="early"/>
    <label for="early">Early</label>
    <input type="radio" id=" On time" name="drone" value=" On time"/>
    <label for=" On time"> On time</label>
    <input type="radio" id="Late" name="drone" value="Late"/>
    <label for="Late">Late</label>
    </div>
    <div> This style works best for which decoration method?
    <input type="checkbox" id="Sublimation" name="drone" value="Sublimation"/>
    <label for="Sublimation">Sublimation</label>
    <input type="checkbox" id=" Heat Transfer" name="drone" value=" Heat Transfer"/>
    <label for=" Heat Transfer"> Heat Transfer</label>
    <input type="checkbox" id="Screen Printing" name="drone" value="Screen Printing"/>
    <label for="Screen Printing">Screen Printing</label>
    <input type="checkbox" id="Tie Dye" name="drone" value="Tie Dye"/>
    <label for="Tie Dye">Tie Dye</label>
    <input type="checkbox" id="Emroidery" name="drone" value="Emroidery"/>
    <label for="Emroidery">Emroidery</label>
    <input type="checkbox" id="Direct to Garment" name="drone" value="Direct to Garment"/>
    <label for="Direct to Garment">Direct to Garment</label>
    <input type="checkbox" id="Keep it blank" name="drone" value="Keep it blank"/>
    <label for="Keep it blank">Keep it blank</label>
    </div>
    </div>
    </div>
</div>
</div>
    );
}