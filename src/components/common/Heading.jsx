const Heading = ({ h2, h2Css, p, pCss, parentCss }) => {
  return (
    <div className={`${parentCss} flex flex-col`}>
      <h2 className="lg:text-5xl md:text-4xl text-3xl">{h2}</h2>
      <p className={pCss}>{p}</p>
    </div>
  );
};

export default Heading;
