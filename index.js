const createLoginTracker = (userInfo) => {
  let attempts = 0;
  const maxAttempts = 3;

  return (password) => {
    if (password === userInfo.password) {
      console.log("Login successful");
      return "Login successful";
    }

    attempts++;

    if (attempts < maxAttempts) {
      console.log(`Attempt ${attempts}: Login failed`);
      return `Attempt ${attempts}: Login failed`;
    } else if (attempts === maxAttempts) {
      console.log(`Attempt ${attempts}: Login failed`);
      return `Attempt ${attempts}: Login failed`;
    } else {
      console.log("Account locked due to too many failed login attempts");
      return "Account locked due to too many failed login attempts";
    }
  };
};

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
