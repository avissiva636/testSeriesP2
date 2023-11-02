import { useInspiroCrud } from "./context/InspiroContext";

const PhotoPage = () => {
  const { Images } = useInspiroCrud();
  console.log(Images);
  return (
    <div>
      <h1>Photo Gallery</h1>
      <div>
        {Images.map((photo) => (
          <div key={photo.id}>
            <img src={photo.url} width="300" height="200" />
            <p>{photo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PhotoPage;
