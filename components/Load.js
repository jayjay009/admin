import { CircleLoader } from "react-spinners";

export default function Load({ fullWidth }) {
  if(fullWidth){
    return(
      <div className="w-full flex justify-center  ">
        <CircleLoader speedMultiplier={2} color={"rgba(113, 44, 0, 1)"} size={200} />
      </div>
    )
  }
  return (
      <CircleLoader speedMultiplier={2}  color={"rgba(113, 44, 0, 1)"} size={200} />
  );
}