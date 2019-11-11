import React, { Component } from "react";
import { Container, Row, Col, Card, FormGroup, Label, Input } from "reactstrap";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../../actions/index.js";
import { connect } from "react-redux";
import $ from "jquery";
import Loader from "react-loader-spinner";
import "./Products.scss";

class Products extends Component {
  state = {
    searchString: "",
    products: [],
    domLoading: true,
    fetchingProducts: true,
    subcategories: []
  };

  componentWillMount() {
    // this.unlisten = this.props.history.listen((location, action) => {
    //     this.props.getProductByCategories(this.props.selectedNavCategory,this.props.match.params.name);
    //     this.props.getSubCategoriesByParent(this.props.selectedNavCategory,this.props.match.params.name);
    //     this.setState({products:this.props.products});
    // });

    // this.props.getProductByCategories(this.props.selectedNavCategory,this.props.match.params.name);
    // this.props.getSubCategoriesByParent(this.props.selectedNavCategory,this.props.match.params.name);
    this.setState({ products: this.props.products });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      products: nextProps.products,
      subcategories: nextProps.subcategories
    });
    this.setState({ fetchingProducts: nextProps.isProductsFetching });
  }

  handleChange = (id, e) => {
    this.setState({ searchString: e.target.value });
  };

  handleSubCategoryChange = () => {
    let products = [...this.props.products];

    let filteredProducts = [];

    var checkedElements = [];

    $(".categoryChk").each(function() {
      let id = $(this).attr("data_id");
      if (this.checked) {
        filteredProducts = [
          ...filteredProducts,
          ...products.filter(p => p.category === parseInt(id))
        ];
        checkedElements.push(this.checked);
      }
    });

    this.setState({ products: filteredProducts });

    if (checkedElements.length <= 0) {
      this.setState({ products: this.props.products });
    }
  };

  handleSearch = ({ currentTarget: input }) => {
    this.setState({ searchString: input.value });
    let products = this.props.products.filter(p =>
      p.name.toLowerCase().match(input.value.toLowerCase())
    );

    this.setState({ products });

    if (input.value === null || input.value === "") {
      this.setState({ products: this.props.products });
    }
  };

  componentDidMount() {
    this.handleLoad();
  }

  handleLoad = () => {
    this.setState({ domLoading: false });
  };
  handlerProductClick = name => {
    this.props.history.push("/gift_cards/" + name);
  };

  render() {
    return this.state.fetchingProducts ? (
      <div
        style={{
          height: "100vh",
          justifyContent: "center",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          zIndex: "200",
          position: "absolute",
          width: "100%"
        }}
      >
        <Loader type="Puff" color="#333" height="100" width="100" />
      </div>
    ) : (
      <Container fluid className="electronics-parent-wrapper">
        <div className="electronics-wrapper">
          <Row className="categories-wrapper">
            <Col md={3} sm={12}>
              <div className="inner-wrapper">
                <h3>Categories</h3>

                {this.state.subcategories.map(sc => (
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        data_id={sc.Id}
                        className="categoryChk"
                        onChange={this.handleSubCategoryChange}
                      />
                      <p>{sc.name}</p>
                    </Label>
                  </FormGroup>
                ))}
              </div>
            </Col>
            <Col md={9} sm={12} className="showcase-wrapper">
              <Row className="search-row">
                <Col lg={9}>
                  <Input
                    type="text"
                    id="search"
                    value={this.state.searchString}
                    onChange={this.handleSearch}
                    placeholder="Search Keyword"
                    style={{marginBottom: '10px'}}
                  />
                </Col>
                <Col lg={3}>
                  <button className="btn">Search</button>
                </Col>
              </Row>
              <Row className="showcase-inner-wrapper">
                <Col xs={12}>
                  <Row>
                    <Col>
                      <h2>{this.props.match.params.name}</h2>
                    </Col>
                  </Row>
                </Col>
                {this.state.products.length < 1 ? (
                  <Col
                    className="item-wrapper"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <h5
                      className="text-muted"
                      style={{
                        textTransform: "uppercase",
                        padding: "10px",
                        border: "3px solid #dadada"
                      }}
                    >
                      No products found
                    </h5>
                  </Col>
                ) : (
                  this.state.products.map(product => (
                    <Col xl={4} lg={6} xs={6} className="item-wrapper">
                      <div className="item-image-card">
                        <img
                          src={`./Images/products/${product.image}`}
                          alt=""
                        />
                        <button
                          className="btn"
                          onClick={() => this.handlerProductClick(product.name)}
                        >
                          Buy Now
                        </button>
                      </div>
                      <p className="text-muted">
                        {product.name}
                        <br />
                        <span>{product.points} pts</span>
                      </p>
                    </Col>
                  ))
                )}
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  subcategories: state.subcategories,
  selectedNavCategory: state.selectedNavCategory,
  fetchingCategoryProducts: state.isCategoryProductFetching,
  fetchingSubCategoryProducts: state.isSubcategoryProductFetching,
  fetchingProducts: state.isProductsFetching
});

const mapDispatchToProps = dispatch => {
  return {
    getProductByCategories: (id, name) =>
      dispatch(actionCreators.getProductByCategories(id, name)),
    getSubCategoriesByParent: (id, name) =>
      dispatch(actionCreators.getSubCategoriesByParent(id, name)),
    getProductsBySubCategory: (id, name) =>
      dispatch(actionCreators.getProductsBySubCategory(id, name))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Products)
);
