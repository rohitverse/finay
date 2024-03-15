import React from 'react'
import "./Profile.scss"
import bannerImg from "../../../Assets/Images/bannerimg.jpg"
import ProfileEditCard from './ProfileEditCard/ProfileEditCard'
import { Container } from 'react-bootstrap'
import PostCard from './PostCard/PostCard'
import postimage from "../../../Assets/Images/bannerimg.jpg"
import postimage1 from "../../../Assets/Images/postImage.png"
import userimage from "../../../Assets/Images/userimage.png"
import userimage1 from "../../../Assets/Images/user-01.png"
import CustomButton from '../../Common/CustomButton/CustomButton'
// import LibraryCard from './Library/LibraryCard'


const Profile = () => {
    const postData = [
        {
            name: 'Abhi Manapragada',
            time: "10 minutes ago",
            userimage: userimage,
            caption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde exercitationem eum aspernatur facilis! Assumenda repellat quia placeat nesciunt? Odit dolor voluptas sit commodi fugiat quis. Aliquam dolorem placeat voluptatibus labore?",
            postimage: postimage,

        }, {
            name: 'Rohit Kumar',
            time: "2 hours ago",
            userimage: userimage1,
            caption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde exercitationem eum aspernatur facilis! Assumenda repellat quia placeat nesciunt? Odit dolor voluptas sit commodi fugiat quis. Aliquam dolorem placeat voluptatibus labore?",
            postimage: postimage1,
        },
        {
            name: 'Mohit Kumar',
            time: "20 minutes ago",
            userimage: userimage,
            caption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde exercitationem eum aspernatur facilis! Assumenda repellat quia placeat nesciunt? Odit dolor voluptas sit commodi fugiat quis. Aliquam dolorem placeat voluptatibus labore?",
        },
    ];
    return (
        <>

            <div className='Profile'>
                <section className='ProfileBanner'>
                    <img className='w-100' src={bannerImg} alt="Banner" />
                </section>
                <Container>
                    <div className='d-flex justify-content-between'>

                        <div className=''>

                            <ProfileEditCard />
                            {/* <LibraryCard /> */}
                        </div>
                        <div>
                            <div className='my-4 d-flex justify-content-start'>
                                <CustomButton text="Wall" className="ms-4" />
                                <CustomButton text="Library" className="ms-4" />
                                <CustomButton text="Store" className="ms-4" />
                            </div>
                            {postData.map((item, index) => {
                                return (
                                    <PostCard
                                        key={index}
                                        username={item.name}
                                        userimage={item.userimage}
                                        time={item.time}
                                        postimage={item.postimage}
                                        caption={item.caption}
                                    />
                                )
                            })}

                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Profile