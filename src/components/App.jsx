import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from './FriendList/FriendList';
import TransactionsList from './Transactions/TransactionsList';

import user from './../assets/user.json';
import data from './../assets/data.json';
import friends from './../assets/friends.json';
import transactions from './../assets/transactions.json';

export const App = () => {
  return (
    <>
    <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
/>
    </div>
    <div>
      <Statistics title="UPLOAD STATS" stats={data} />
    </div>
    <div>
        <FriendList friends={friends}></FriendList>
      </div>
      <div>
        <TransactionsList items={transactions}></TransactionsList>
      </div>
    </>
  );
};
