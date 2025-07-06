function Pagination(props) {
  return (
    <div className="pagination-container">
  {props.goToPrevPage && <button className="pagination-button" onClick={props.goToPrevPage}>
    Previous Page
    </button>}   
  {props.goToNextPage && <button className="pagination-button" onClick={props.goToNextPage}>
    Next Page
    </button>}  
  </div>
          );
}

export default Pagination;