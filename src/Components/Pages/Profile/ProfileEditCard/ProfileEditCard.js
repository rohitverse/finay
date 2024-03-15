import React from 'react'
import "./ProfileEditCard.scss"
import userimage from "../../../../Assets/Images/userimg.png"
import CustomButton from '../../../../Components/Common/CustomButton/CustomButton'
import Tiktok from "../../../../Assets/Images/Tiktok.png";
import Instagram from "../../../../Assets/Images/Instagram.png";
import AppleMusic from "../../../../Assets/Images/AppleMusic.png";
import Spotify from "../../../../Assets/Images/Spotify.png";
import SoundCloud from "../../../../Assets/Images/SoundCloud.png";

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
                <div className='d-flex justify-content-between px-5 mt-3'>
                    <figure>
                        <img src={Tiktok} alt="Tiktok" />
                    </figure>
                    <figure>
                        <img src={Instagram} alt="Instagram" />
                    </figure>
                    <figure>
                        <img src={AppleMusic} alt="AppleMusic" />
                    </figure>
                    <figure>
                        <img src={SoundCloud} alt="SoundCloud" />
                    </figure>
                    <figure>
                        <img src={Spotify} alt="Spotify" />
                    </figure>
                </div>
            </div>
        </>
    )
}

export default ProfileEditCard