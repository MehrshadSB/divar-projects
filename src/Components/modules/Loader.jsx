import { ColorRing } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{ textAlign: "center", marginTop: "150px" }}
    >
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={[
          "#a62626",
          "#a62626",
          "#a62626",
          "#a62626",
          "#a62626",
        ]}
      />
    </div>
  );
}

export default Loader;
