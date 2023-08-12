export default function ProductReview({reviews}) {
    return (
        <div ClassName="reviews w-75">
            <h3>Other's Reviews:</h3>
            <hr />
            {reviews && reviews.map(review => (
                <div key={review._id} ClassName="review-card my-3">
                    <div ClassName="rating-outer">
                        <div ClassName="rating-inner" style={{width: `${review.rating/5*100}%`}}></div>
                    </div>
                    <p ClassName="review_user">by {review.user.name}</p>
                    <p ClassName="review_comment">{review.comment}</p>

                    <hr />
                </div>
            ))
            }
           
        </div>
    )
}