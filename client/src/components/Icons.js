import React from "react";
const Icons = (props) => {
  return (
    <>
      <div className="HeaderComponent-Icons">
        <div className="HeaderComponent-IconContainerCart">
          <img src="../images/cart_v2.png" alt="" />
          <div className="HeaderComponent-IconsCart">Cart</div>
        </div>
        <div className="HeaderComponent-IconContainerLists">
          <img src="../images/list_v2.png" />
          <div className="HeaderComponent-IconsLists">Lists</div>
        </div>
        <div className="HeaderComponent-IconContainerAccount">
          <img src="../images/account_v2.png" alt="" />
          <div className="HeaderComponent-IconsAccount">Account</div>
        </div>
      </div>
    </>
  );
};
export default Icons;