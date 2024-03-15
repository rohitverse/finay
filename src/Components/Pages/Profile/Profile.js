import React from 'react'
import "./Profile.scss"
import bannerImg from "../../../Assets/Images/bannerimg.jpg"
import ProfileEditCard from './ProfileEditCard/ProfileEditCard'
import { Container } from 'react-bootstrap'
import PostCard from './PostCard/PostCard'
import postimage from "../../../Assets/Images/bannerimg.jpg"
import userimage from "../../../Assets/Images/User.png"
import LibraryCard from './Library/LibraryCard'


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
            userimage: userimage,
            caption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde exercitationem eum aspernatur facilis! Assumenda repellat quia placeat nesciunt? Odit dolor voluptas sit commodi fugiat quis. Aliquam dolorem placeat voluptatibus labore?",
            postimage: postimage,
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
                            <LibraryCard />
                        </div>
                        <div>
                            {postData.map((item, index) => {
                                return (
                                    <PostCard
                                        key={index}
                                        username={item.name}
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