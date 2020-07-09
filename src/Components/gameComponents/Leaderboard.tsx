import React from "react";
import User from "../../Interfaces/User";

interface LeaderboardProps {
  users: User[];
}

const Leaderboard = ({ users }: LeaderboardProps) => {
  const leaderBoardTopTen = (users: User[]) => {
    const orderedUsers = users.sort((a, b) =>
      a.credit < b.credit ? 1 : b.credit < a.credit ? -1 : 0
    );
    return orderedUsers.slice(0, 9);
  };

  return (
    <div id="leaderboard-table">
      <h1>Leaderboard</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          {leaderBoardTopTen(users).map((user: User, index: number) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>£{user.credit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
