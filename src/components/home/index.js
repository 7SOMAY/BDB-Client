import React, {useEffect} from 'react';
import MemberCard from "../cards/MemberCard";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {loadAllUsers} from "../../redux/actions/user";


const houseMembers = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'Charlie' },
    { id: 5, name: 'Charlie' },
    { id: 6, name: 'Charlie' },
    // ... add more members
];

const Home = () => {

    const {users} = useSelector((state) => state.user);
    console.log(users);




    return (
        <div className="py-24 sm:p-6">
            <div className="flex flex-wrap justify-center gap-4">
                {users && users.map(member => (
                    <MemberCard key={member.id} name={member.name} />
                ))}
            </div>
        </div>
    );
};

export default Home;
