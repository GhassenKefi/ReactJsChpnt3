import React from 'react'
import ProfilePhoto from './Profile/ProfilePhoto'
import FullName from './Profile/FullName'
import Address from './Profile/Address'

export default function Profile() {
    return (
        <div className="Profile">
            <ProfilePhoto></ProfilePhoto>
            <FullName></FullName>
            <Address></Address>
        </div>
    )
}
