import React from 'react';
import MemberCard from "../cards/MemberCard";
import {useSelector} from "react-redux";



const Home = () => {
    const numberOfCards = useSelector((state) => state.user.users.length);

    const {users} = useSelector((state) => state.user);
    const isLoading = useSelector((state) => state.user.loading);
    const arr = Array.from({length: numberOfCards});

    return (
        <div className="py-24 sm:p-6">
            {
                isLoading ?
                    (<>{
                        arr.map((_, index) => (
                            <MemberCard key={index} isLoading={isLoading}/>
                        ))
                    }
                    </>)
                    :
                    (<>
                        <div className="flex flex-wrap justify-center gap-4">
                            {users && users.map(member => (
                                <MemberCard key={member.id} name={member.name}/>
                            ))}
                        </div>
                    </>)
            }
        </div>
    );
};

export default Home;
