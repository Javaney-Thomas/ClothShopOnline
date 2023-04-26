import React, { useState } from "react";
import "../componentsCSS/detailsizechart.css";
const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="tabcontainer">
      <div className="tabheader">
        <div
          className={toggleState === 1 ? "tab active-tab" : "tab"}
          onClick={() => toggleTab(1)}
          id="firstlabel"
        >
          Details
        </div>
        <div
          className={toggleState === 2 ? "tab active-tab" : "tab"}
          onClick={() => toggleTab(2)}
          id="secondlabel"
        >
          Size Chart
        </div>
      </div>
      <div className="tabcontent">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <ul className='Detail'>
            <li>
              8 oz./yd² (US) 13.5 oz./L yd (CA), 50/50 cotton/polyester, 20
              singles
            </li>
            <li>Heather Sport colors: 40/60 cotton/polyester</li>
            <li>Safety Green: Compliant with ANSI / ISEA 107</li>
            <li>2-end midweight fleece fabric</li>
            <li>Classic fit</li>
            <li>Air jet yarn for softer feel and reduced pilling</li>
            <li>Double-lined hood with color-matched drawcord</li>
            <li>
              Double-needle stitching at shoulders, armholes, neck, waistband
              and cuffs
            </li>
            <li>Front pouch pocket </li>
            <li>1 x 1 rib with spandex for enhanced stretch and recovery</li>
            <li>Tear away label</li>
          </ul>
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <table className="charttable">
            <tr>
              <th></th>
              <th>XS</th>
              <th>S</th>
              <th>M</th>
              <th>L</th>
              <th>XL</th>
              <th>2XL</th>
              <th>3XL</th>
              <th>4XL</th>
              <th>5XL</th>
            </tr>
            <tr>
              <td>Body Length</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td>31</td>
              <td>32</td>
              <td>33</td>
              <td>34</td>
            </tr>
            <tr>
              <td>Body Length Tolerance</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
            </tr>
            <tr>
              <td>Chest Tolerance</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
            </tr>
            <tr>
              <td>Chest Width (Laid Flat)</td>
              <td>18</td>
              <td>20</td>
              <td>22</td>
              <td>24</td>
              <td>26</td>
              <td>28</td>
              <td>30</td>
              <td>32</td>
              <td>34</td>
            </tr>
            <tr>
              <td>Sleeve Length (From Center Back)</td>
              <td>32 1/2</td>
              <td>33 1/2</td>
              <td>34 1/2</td>
              <td>35 1/2</td>
              <td>36 1/2</td>
              <td>37 1/2</td>
              <td>38 1/2</td>
              <td>39 1/2</td>
              <td>40 1/2</td>
            </tr>
            <tr className='lastrow'>
              <td>Sleeve Tolerance</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
              <td>+/-1</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Tabs;