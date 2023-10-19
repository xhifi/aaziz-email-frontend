const index = () => {
  const date = new Date().toLocaleDateString().split("/");
  const aggr = date.pop();
  return (
    <div className="container-fluid px-0 bg-light py-2">
      <div className="container col-11 text-center">Brainloggers Copyright &#169; {aggr} | All Rights Reserved</div>
    </div>
  );
};
export default index;
