import "../componentsCSS/footer.css";
export default function FooterComponent() {
  return (
    <div className="footer">
      <hr className="solid1" />
      <div className="aboutuslinks">
        <h3>About Us</h3>
        <a href="#">About Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
        <a href="#">Review</a>
        <a href="#">Site Map</a>
        <a href="#">Accessibility Statement</a>
      </div>
      <div className="helpcenterlinks">
        <h3>Help Center</h3>
        <a href="#">My Account</a>
        <a href="#">Order Status</a>
        <a href="#">Shipping</a>
        <a href="#">Returns</a>
        <a href="#">CA Proposition 65</a>
        <a href="#">My Lists</a>
        <a href="#">FAQs</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="newsletter">
        <input
          className="newsletterinput"
          type="text"
          placeholder="Enter your email address to recieve 5% off"
        ></input>
        <button className="subscribebtn" type="button">
          Subscribe
        </button>
        <img
          class="fit-picture"
          src="../images/footer-image/Facebook.jpg"
          alt="Facebook Icon"
        ></img>
        <img
          class="fit-picture"
          src="../images/footer-image/Pintrest.jpg"
          alt="Pinterst Icon"
        ></img>
      </div>
    </div>
  );
}
