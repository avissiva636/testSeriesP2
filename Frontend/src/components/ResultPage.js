import ContactUsHomePage from "./ContactUsHomePage";
import Footer from "./Footer";
import icon from "./css/images/geography.png"
import medal from "./css/images/medal.png"
import white from "./css/images/whiteboard.png"
import mortar from "./css/images/mortarboard.png"

const ResultPage = () => {
  return (
    <div>
      <div class="container result__container mt-4">
  <div class="row">
    <div class="col-md-3">
      <div class="card__result">
        <div class="card-body ">
          <img className="result__icon" src={medal} alt="icon" />
<div className="results__marks py-2">1000&#43;</div>
          <p class="card-text">Some text for Card 1.</p>
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card__result">
        <div class="card-body">
          <img className="result__icon" src={icon} alt="icon" />
          <div className="results__marks py-2">1000&#43;</div>
          <p class="card-text">Some text for Card 2.</p>
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card__result">
        <div class="card-body">
        <img className="result__icon" src={white} alt="icon" />
        <div className="results__marks py-2">1000&#43;</div>
          <p class="card-text">Some text for Card 3.</p>
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card__result">
        <div class="card-body">
        <img className="result__icon" src={mortar} alt="icon" />
        <div className="results__marks py-2">1000&#43;</div>
          <p class="card-text">Some text for Card 4.</p>
        </div>
      </div>
    </div>
  </div>
</div>
      <ContactUsHomePage />
    </div>
  );
};
export default ResultPage;
