import CardTitle from "./CardTitle/CardTitle";
import PrimaryButton from "../buttons/PrimaryButton";
import CardImage from "./CardImage";
import CardText from "./CardText";
import SecondaryButton from "../buttons/SecondaryButton";

const Card = ({ titulo, img, text, linkBtn ,oferta=false}) => {
  
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage url={img} alt={"tamal"}></CardImage>
      <div className="card-body">
        <CardTitle titulo={titulo} oferta={oferta}/>

        <CardText text={text}></CardText>
        <SecondaryButton url={linkBtn} type={"primary"}></SecondaryButton>
        <PrimaryButton
          url={linkBtn}
          text="Conoce Más"
          type="success"
        ></PrimaryButton>
      </div>
    </div>
  );
};

export default Card;
