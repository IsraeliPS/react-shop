const SecondaryButton = ({url,type}) => {
  return (
    <a href={url} className={`btn btn-${type}`}>
      Go somewhere
    </a>
  );
};

export default SecondaryButton;
