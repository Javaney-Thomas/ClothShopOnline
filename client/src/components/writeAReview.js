export default function WriteAReview() {
  const stars = "☆".repeat(5);
  return (
    <div className="dropdown1">
        <div className="writeareview">WRITE A REVIEW</div>
        <div className="field"> Indicates a required field</div>
        <div className="score"> Score: </div>
        <div className="reviewstars">
          <span style={{ color: "#ccc", fontSize: "30px" }}>{stars}</span>
        </div>
        <div className="title"> Title: </div>
        <div className="titlebox">
          <input type="text"></input>
        </div>
        <div className="review"> Review: </div>
        <div className="reviewbox">
          <input type="text"></input>
        </div>
        <div className="overallsatisfaction">
          <div className="ratingquestion">
            <p>
              How would you rate your overall satisfaction with this product?
            </p>
            <div className="radiobtns">
              <div className="overallRating-Flex">
                <input className="satisfactionrate" type="radio" />
                <div>Not satisfied</div>
                <div className="notsatisfiedcontainer">
                  <div className="satisfactionbar1"></div>
                  <div className="satisfactionbar2"></div>
                  <div className="satisfactionbar3"></div>
                  <div className="satisfactionbar4"></div>
                  <div className="satisfactionbar5"></div>
                </div>
              </div>
              <div className="overallRating-Flex">
                <input className="satisfactionrate" type="radio" />
                <div>Somewhat satisfied</div>
                <div className="notsatisfiedcontainer">
                  <div className="somewhatbar1"></div>
                  <div className="somewhatbar2"></div>
                  <div className="somewhatbar3"></div>
                  <div className="somewhatbar4"></div>
                  <div className="somewhatbar5"></div>
                </div>
              </div>
              <div className="overallRating-Flex">
                <input className="satisfactionrate" type="radio" />
                <div>Satisfied</div>
                <div className="notsatisfiedcontainer">
                  <div className="satisfiedbar1"></div>
                  <div className="satisfiedbar2"></div>
                  <div className="satisfiedbar3"></div>
                  <div className="satisfiedbar4"></div>
                  <div className="satisfiedbar5"></div>
                </div>
              </div>
              <div className="overallRating-Flex">
                <input className="satisfactionrate" type="radio" />
                <div>Very satisfied</div>
                <div className="notsatisfiedcontainer">
                  <div className="verybar1"></div>
                  <div className="verybar2"></div>
                  <div className="verybar3"></div>
                  <div className="verybar4"></div>
                  <div className="verybar5"></div>
                </div>
              </div>
              <div className="overallRating-Flex">
                <input className="satisfactionrate" type="radio" />
                <div>Extremely satisfied</div>
                <div className="notsatisfiedcontainer">
                  <div className="extremelybar1"></div>
                  <div className="extremelybar2"></div>
                  <div className="extremelybar3"></div>
                  <div className="extremelybar4"></div>
                  <div className="extremelybar5"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="fitquestion">
            <p>How do you find the fit of this poduct?</p>
            <div className="overallRating-Flex">
              <input type="radio" />
              <span className="runssmall">Runs smalls</span>
              <div className="notsatisfiedcontainer">
                <span className="smallbar1"></span>
                <span className="smallbar2"></span>
                <span className="smallbar3"></span>
                <span className="smallbar4"></span>
                <span className="smallbar5"></span>
              </div>
            </div>
            <div className="overallRating-Flex">
              <input type="radio" />
              <span className="truetosize">True to size</span>
              <div className="notsatisfiedcontainer">
                <span className="truebar1"></span>
                <span className="truebar2"></span>
                <span className="truebar3"></span>
                <span className="truebar4"></span>
                <span className="truebar5"></span>
              </div>
            </div>
            <div className="overallRating-Flex">
              <input type="radio" />
              <span className="runsbig">Runs big</span>
              <div className="notsatisfiedcontainer">
                <span className="bigbar1"></span>
                <span className="bigbar2"></span>
                <span className="bigbar3"></span>
                <span className="bigbar4"></span>
                <span className="bigbar5"></span>
              </div>
            </div>
          </div>
          <div className="scalequestion">
            <p>
              On a scale from 1 - 5 (5 being best) how would you rate the
              quality of this product?
            </p>
            <div className="overallRating-Flex">
              <input className="satisfactionrate" type="radio" />
              <label>1</label>
              <div className="notsatisfiedcontainer">
                <div className="scale1bar1"></div>
                <div className="scale1bar2"></div>
                <div className="scale1bar3"></div>
                <div className="scale1bar4"></div>
                <div className="scale1bar5"></div>
              </div>
            </div>
            <div className="overallRating-Flex">
              <input className="satisfactionrate" type="radio" />
              <div>2</div>
              <div className="notsatisfiedcontainer">
                <div className="scale2bar1"></div>
                <div className="scale2bar2"></div>
                <div className="scale2bar3"></div>
                <div className="scale2bar4"></div>
                <div className="scale2bar5"></div>
              </div>
            </div>
            <div className="overallRating-Flex">
              <input className="satisfactionrate" type="radio" />
              <div>3</div>
              <div className="notsatisfiedcontainer">
                <div className="scale3bar1"></div>
                <div className="scale3bar2"></div>
                <div className="scale3bar3"></div>
                <div className="scale3bar4"></div>
                <div className="scale3bar5"></div>
              </div>
            </div>
            <div className="overallRating-Flex">
              <input className="satisfactionrate" type="radio" />
              <div>4</div>
              <div className="notsatisfiedcontainer">
                <div className="scale4bar1"></div>
                <div className="scale4bar2"></div>
                <div className="scale4bar3"></div>
                <div className="scale4bar4"></div>
                <div className="scale4bar5"></div>
              </div>
            </div>
            <div className="overallRating-Flex">
              <input className="satisfactionrate" type="radio" />
              <div>5</div>
              <div className="notsatisfiedcontainer">
                <div className="scale5bar1"></div>
                <div className="scale5bar2"></div>
                <div className="scale5bar3"></div>
                <div className="scale5bar4"></div>
                <div className="scale5bar5"></div>
              </div>
            </div>
          </div>
          <div className="deliveryquestion">
            <div className="experience">
              <p>
                Which of the following best describes your delivery experience?
              </p>
              <input className="earlyradio" type="radio" />
              <div className="early">Early</div>
              <input
                className="ontimeradio"
                type="radio"
                id=" On time"
                name="drone"
                value=" On time"
              />
              <div className=" ontime"> On time</div>
              <input
                className="lateradio"
                type="radio"
                id="Late"
                name="drone"
                value="Late"
              />
              <div className="late">Late</div>
            </div>
          </div>
          <div className="patterndiv">
            <p>This style works best className which decoration method?</p>
            <input type="checkbox" />
            <div className="sublimation">Sublimation</div>
            <input type="checkbox" />
            <div className=" heattransfer"> Heat Transfer</div>
            <input type="checkbox" />
            <div className="screenprinting">Screen Printing</div>
            <input type="checkbox" />
            <div className="tiedye">Tie Dye</div>
            <input type="checkbox" />
            <div className="emroidery">Emroidery</div>
            <input type="checkbox" />
            <div className="directtogarment">Direct to Garment</div>
            <input type="checkbox" />
            <div className="keepitblank">Keep it blank</div>
          </div>
          <div className="usernameemaildiv over overallRating-Flex">
            <div className="usernameemaildiv1">
              <div className="username"> Username: </div>
              <input className="usernamebox" type="text"></input>
            </div>
            <div className="usernameemaildiv2">
              <div className="useremail"> Email: </div>
              <input className="useremailbox" type="text"></input>
            </div>
          </div>
        </div>
    </div>
  );
}
