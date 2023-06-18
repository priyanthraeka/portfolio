/* eslint-disable react/prop-types */
const Card = (props) => {
  const { children, id } = props;

  return (
    <div id={id} className="w-full px-5 md:px-20 lg:px-52">
      {children}
    </div>
  );
};

export default Card;
