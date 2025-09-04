
import React from "react";
import "../styles/AccountSetting.css";

const accounts = [
  {
    id: 1,
    name: "Marry Doe",
    email: "Marry@Gmail.Com",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam",
  },
  {
    id: 2,
    name: "John Smith",
    email: "john.smith@gmail.com",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    description:
      "John's account placeholder description goes here.",
  },
  {
    id: 3,
    name: "Linda Johnson",
    email: "linda.j@gmail.com",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    description:
      "Linda's account placeholder description goes here.",
  },
];

const AccountSetting = () => {
  return (
    <div className="account-setting-container animated-slideIn">
      <h2>Account Settings</h2>

      <div className="account-list">
        {accounts.map((account) => (
          <div key={account.id} className="account-item">
            <img
              src={account.image}
              alt={account.name}
              className="account-avatar"
            />

            <div className="account-info">
              <h3>{account.name}</h3>
              <p className="account-email">{account.email}</p>
              <p className="account-description">{account.description}</p>
            </div>

            <div className="profile-edit-icon">
              <svg
                width="24"
                height="24"
                fill="#6A0DAD"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.004 1.004 0 0 0 0-1.42L18.37 3.29a1.004 1.004 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.83z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSetting;