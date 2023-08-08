import React from 'react';
import MemberCard from "../cards/MemberCard";
import {useSelector} from "react-redux";

const Home = () => {

    const {users} = useSelector((state) => state.user);
    const isLoading = useSelector((state) => state.user.loading);

    return (
        <div className="py-24 sm:p-6">
            {
                isLoading ?
                    (<>
                        <MemberCard isLoading={isLoading}/>
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
