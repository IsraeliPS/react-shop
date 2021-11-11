import CardTitle from "./CardTitle";
import PrimaryButton from "../buttons/PrimaryButton";
import CardImage from "./CardImage";
import CardText from "./CardText";
import SecondaryButton from "../buttons/SecondaryButton";

const Card = ({ titulo, img, text, linkBtn }) => {
  return (
    <div class="card" style={{ width: "18rem;" }}>
      <CardImage url={img} alt={"tamal"}></CardImage>
      <div class="card-body">
        <CardTitle titulo={titulo} />

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
