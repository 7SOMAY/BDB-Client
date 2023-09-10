import React, {useEffect, useState} from 'react';
import MemberCard from "../cards/MemberCard";
import {useDispatch, useSelector} from "react-redux";
import {loadAllUsers} from "../../redux/actions/user";


const Home = () => {
    // const numberOfCards = useSelector((state) => state.user.users.length);

    const dispatch = useDispatch();




    const {users} = useSelector((state) => state.user);
    let numberOfCards;
    if(users){
        numberOfCards = users.length;
    }
    else{
        numberOfCards = 3;
    }

    const [deleteUser, setDeleteUser] = useState(false);


    useEffect(() => {
        dispatch(loadAllUsers());
        setDeleteUser(false);
    }, [deleteUser]);


    const {user} = useSelector((state) => state.user);
    const isLoading = useSelector((state) => state.user.loading);
    const arr = Array.from({length: numberOfCards});

    return (
        <div className="py-24 sm:p-6">
            {
                isLoading ?
                    (<>
                        <div className="flex flex-wrap justify-center gap-4">
                            {arr && arr.map((_, index) => (
                                <MemberCard key={index} isLoading={true}/>
                            ))}
                        </div>
                    </>)
                    :
                    (<>
                        <div className="flex flex-wrap justify-center gap-4">
                            {users && users.map(member => (
                                <MemberCard key={member._id} id={member._id} currUser={member.name === user.user.name} name={member.name} isDelete={setDeleteUser}/>
                            ))}
                        </div>
                    </>)
            }
        </div>
    );
};

export default Home;
