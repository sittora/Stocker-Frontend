import React, { useState, useEffect } from "react";
import Stock from "./Stock";

function UserList({ userListArray, title, onViewMore }) {

    const userRows = userListArray.map((user, index) => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>       
            </tr>
        ));
    return (
        <div id="user-list-container">
            <table class="center">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                {userRows}
            </table>
        </div>
    );
}

export default UserList;