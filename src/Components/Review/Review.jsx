import './review.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Star, StarBorder } from '@mui/icons-material'

export const Review = () => {

  const [review, setReview] = useState([]);
  // const [reviews, setReviews] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [reviewsPerPage, setReviewsPerPage] = useState(10);

  const getReview = async () => {
    try{
      let response = await axios.get("https://analisdatacus.000webhostapp.com/review.php")
      setReview(response.data)
      console.log(response.data);
    } catch(e){
      console.log(e.message);
    }
  }

  useEffect(() => {
    getReview();
  }, [])

  // const indexOfLastReview = currentPage * reviewsPerPage;
  // const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  // const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <div className='mt-4 mb-4'>
     {
      review.map((review, index) => {
        return(
          <div>
            <div key={index} className='d-flex'>
          <img className="user-profile-review" src="https://cf.shopee.co.id/file/e8ee7f968a98771fd065d777638eab0f" alt="" />
         <div className="ml-2">
        <span className='rev-name'>{review.name}</span>
          <p className='rev-date'>
          {review.tanggal}
          </p>
         </div>
         <div className='comment-user'>
         <span className='star-desc'>
            <Star /> 
            <Star /> 
            <Star /> 
            <Star /> 
            <StarBorder /> 
            <div className="rate-star-beauty">
              {review.rating}
            </div>
          </span>
            <span>
              <p key={index}>
              {review.ulasan}
              </p>
            </span>
            <span>
              <img 
              height={'50px'}
              width={'50px'}
              style={{ marginLeft: '12px' }}
              src={review.img} alt="" />
            </span>
          </div>
        </div>
        <hr />
      </div>
        )
      })
     }
    </div>
  )
}
