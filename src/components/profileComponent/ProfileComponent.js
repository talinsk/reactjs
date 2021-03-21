import { useSelector } from 'react-redux'

export default function ProfileComponent() {

    const profile = useSelector((state) => state.profile);

    return (
        <>
            <h2>Profile</h2> 
            <div>
                Name: {profile.name}
            </div>
            <div>
                EMail: {profile.email}
            </div>
        </>
    )

}