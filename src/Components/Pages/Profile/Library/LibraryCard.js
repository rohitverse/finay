import React from 'react'
import userimage from "../../../../Assets/Images/userimage.png"
import "./LibraryCard.scss"
const LibraryCard = () => {
  return (
    <>
      <div className='libraryCard my-4'>
        <div className='d-flex justify-content-between'>
          <figure >
            <img src={userimage} alt="User" className='imagePost' />
          </figure>
          <div className='postCard_Content ps-2'>
            <h4>username</h4>

            <div className='my-3'>
              <img src="postimage" alt="ks" />
            </div>

            <p>caption</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LibraryCard