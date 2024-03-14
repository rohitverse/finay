import React from 'react'
import "./ProfileEditCard.scss"
import userimage  from "../../../Assets/Images/userimg.png"
import CustomButton from '../../../Components/Common/CustomButton/CustomButton'

const ProfileEditCard = () => {
    return (
        <>
            <div className='ProfileEditCard text-center'>
                <figure className='UserImg mb-3'>
                    <img src={userimage} alt="User" />
                </figure>
                <h5>Yolotli Bailey</h5>
                <h6>@yolotli_bailey</h6>
                <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A habitant commod</p>

                <div className='d-flex justify-content-center'>
                    <div className='suppt me-2'>
                        <h4>300</h4>
                        <p>Supporters</p>
                    </div>
                    <div className='suppt ms-2'>
                        <h4>487</h4>
                        <p>Supporting</p>
                    </div>
                </div>

                <CustomButton text="Edit Profile" className="mt-4" />
            </div>
        </>
    )
}

export default ProfileEditCard