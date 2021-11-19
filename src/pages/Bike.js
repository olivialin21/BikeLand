import { useContext, useEffect } from "react";
import { StoreContext } from "../store"

function Bike() {
  // const { state: { page: { title, banner } }, dispatch } = useContext(StoreContext);

  // useEffect(() => {
  //   const url = window.location.pathname;
  //   setPage(dispatch, url)
  // }, []);// eslint-disable-line react-hooks/exhaustive-deps  
  
  return (
    <>
    <div id="mapid"></div>
    {/* <Navbar /> */}
    {/* <Header title={title} bannerImg={banner}/> */}
    {/* <DataList /> */}
    {/* <Steps /> */}
    {/* <Footer /> */}
    </>
  );
}

export default Bike;