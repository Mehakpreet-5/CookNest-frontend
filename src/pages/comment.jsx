
import React from 'react';
import commentList from '../list/commentList';
import yelloww from '../assets/yellow.png'
import './comment.css';

function CommentCard({ comment, index, isRepeat }) {
    return (
        <div className="w-full sm:w-80 p-4 sm:p-6 greenn bg-yellow-50 bg-opacity-15"
          data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="200" >
            <div className="card  shadow-xl h-50 lg:h-72 w-72 lg:w-80  border border-orange-600 border-opacity-40 h-full">
                <div className="card-body h-full w-full p-4 ml-2">
                    <div className="flex flex-col justify-between mt-2">
                        <div>
                            <h2 className="card-title lg:text-3xl sm:text-xl font-bold lg:mt-3 dark-orange fontt">{comment.title}</h2>
                            <h3 className="text-sm lg:text-lg">{comment.address}</h3>
                        </div>
                        <div className="rating w-20 lg:w-24 mt-3">
                            {[...Array(5)].map((_, i) => (
                                <input
                                    key={i}
                                    type="radio"
                                    name={`slider-rating-${isRepeat ? 'repeat-' : ''}${index}`}
                                    className="mask mask-star"
                                    defaultChecked={i < comment.rating}
                                    aria-label={`${i + 1} star`}
                                />
                            ))}
                        </div>
                    </div>
                    <p className="text-sm lg:text-base lg:px-2 text-green-950 mt-2">{comment.content}</p>
                </div>
            </div>
        </div>
    );
}

function Comment() {
    return (
        <div className=' relative mb-80 lg:mt-44'>
            {/* <img src={yelloww} alt="yelloww bg" className='h-96 w-full relative'/> */}
            <div className='h-96 w-full relative '></div>
        <div className="comment-section absolute inset-0  mx-auto px-4 sm:px-8 w-9/12 lg:w-8/12 lg:px-16 py-8 mt-6 lg:mt-12  ">
         
            <div className=' flex flex-col justify-center items-center '>
            <h1 className='border border-yellow-600 w-40 rounded-full  bgg uppercase py-1 mx-0 text-center'>
            Testimonial

        </h1>
                <h1 className="text-4xl  mt-4 sm:text-4xl md:text-6xl font-bold text-center fontt greenn"
                //   data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="900"
                  >What Our Customers Say!</h1>
            </div>
            
            {/* Scrolling Comments Slider */}
            <div className="relative overflow-hidden mt-12">
                <div className="flex space-x-4 sm:space-x-9 animate-scroll">
                    {commentList.map((comment, index) => (
                        <React.Fragment key={index}>
                            <CommentCard comment={comment} index={index} isRepeat={false} />
                            <CommentCard comment={comment} index={index} isRepeat={true} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
}

export default Comment;

