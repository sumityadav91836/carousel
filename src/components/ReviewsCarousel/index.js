import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewCount: 0}

  nextReview = () => {
    const {reviewCount} = this.state

    if (reviewCount >= 3) {
      this.setState({reviewCount: 3})
    } else {
      this.setState(prevState => ({reviewCount: prevState.reviewCount + 1}))
    }
  }

  prevReview = () => {
    const {reviewCount} = this.state
    if (reviewCount <= 0) {
      this.setState({reviewCount: 0})
    } else {
      this.setState(prevState => ({reviewCount: prevState.reviewCount - 1}))
    }
  }

  render() {
    const {reviewCount} = this.state
    const {reviewsList} = this.props

    return (
      <div className="app-container">
        <h1 className="title">Reviews</h1>
        <div className="content-container">
          <button
            data-testid="leftArrow"
            type="button"
            className="button"
            onClick={this.prevReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="items-container">
            <img
              src={reviewsList[reviewCount].imgUrl}
              alt={reviewsList[reviewCount].username}
              className="review-image"
            />
            <p className="review-name">{reviewsList[reviewCount].username}</p>
            <p className="review-company-name">
              {reviewsList[reviewCount].companyName}
            </p>
            <p className="review-description">
              {reviewsList[reviewCount].description}
            </p>
          </div>
          <button
            data-testid="rightArrow"
            type="button"
            className="button"
            onClick={this.nextReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
