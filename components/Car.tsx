interface Props {
  name: string;
  imageURL?: string;
  price?: number;
  description?: string;
}
export default function Car(props: Props) {
  const { name, imageURL, price, description } = props;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={imageURL || ""} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div >
            {price}$
        </div>

        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
