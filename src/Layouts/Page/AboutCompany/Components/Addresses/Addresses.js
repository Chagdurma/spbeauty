import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";

function Addresses() {
  const style = {
    border: "1px solid #ECEEF1",
    borderRadius: "8px",
    padding: "24px",
  };

  const listElementStyle = {
    paddingLeft: "100px",
  };
  const listElementStyle2 = {
    marginLeft: "-8px",
  };
  const style1 = {
    marginTop: "200px",
  };
  const style3 = {
    marginTop: "24px",
  };
  
  return (
    <div className="justify-content-between mt-4">
    <div className="d-inline-flex flex-column gap-2 mt-4" style={style}>
      <div className="title">Адреса заведений</div>
      <div className="d-inline-flex flex-column gap-3"style={listElementStyle2}>  
        <div className="d-inline-flex flex-column gap-3" style={style3}>
        <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
        <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
        </div>
        </div>
        <div className="d-inline-flex flex-column gap-3" style={style1}>
        <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
      </div>
    </div>
  );
}

export default Addresses;
