import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from "./ComponentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui containder comments">

            <ApprovalCard>
            <CommentDetail
            author="Zubair"
            timeAgo="Today at 6:40 PM"
            content="it is good!"
            avatar={faker.image.avatar()}
            />
            </ApprovalCard>

           <ApprovalCard>
           <CommentDetail
            author="Ali"
            timeAgo="Today at 6:42 PM"
            content="nice post!"
            avatar={faker.image.avatar()}
            />
           </ApprovalCard>
           
           <ApprovalCard>
           <CommentDetail
            author="Sam"
            timeAgo="Today at 6:55 PM"
            content="Delicious"
            avatar={faker.image.avatar()}
            />
           </ApprovalCard>
        </div>
    );
};


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);