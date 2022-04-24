import ReactPaginate from 'react-paginate';
import ContributorCard from './ContributorCard';



import React from 'react';

class Pagination extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      offset: 0,
      displayData: [],
      orgtableData: [],
      perPage: 12,
      currentPage: 1
    }
    this.handlePageClick = this.handlePageClick.bind(this);
  }


  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.loadMoreData()
    });
    window.scrollTo(0, 0);

  };

  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      displayData: slice
    })

  }




  componentDidMount() {
    fetch("http://localhost:4000/users")
      .then(res => res.json())
      .then((res) => {
        //console.log(res);
        this.setState({
          pageCount: Math.ceil(res.length / this.state.perPage),
          orgtableData: res,
          displayData: res.slice(this.state.offset, this.state.offset + this.state.perPage)
        })
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>

        <div className="wrapper row row-cols-1" >
          {console.log(this.state.displayData)}
          {this.state.displayData.map((data, key) => <ContributorCard key={data._id} data={data} />)}
        </div>

        {this.state.displayData.length > 0 ?
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} /> :
          <div className="spinner-border text-danger spinner" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        }
      </div>
    )
  }
}

export default Pagination;