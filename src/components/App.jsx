import transactions from 'transactions.json'
import user from 'user.json';
import statisticsData from 'data.json'
import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <Statistics
        title='Upload stats'
        data={statisticsData}
      />

      <FriendList />
      <TransactionHistory
      items={transactions}
      />
    </div>
    
  );
};
