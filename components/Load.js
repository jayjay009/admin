import { HashLoader } from "react-spinners";

export default function Load({ fullWidth }) {
  if(fullWidth){
    return(
      <div className="w-full flex justify-center  ">
        <HashLoader speedMultiplier={2} color={"#555"} size={200} />
      </div>
    )
  }
  return (
      <HashLoader speedMultiplier={2} color={"#555"} size={200} />
  );
}