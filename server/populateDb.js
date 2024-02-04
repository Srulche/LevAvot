const PopulateDB = async () => {
  await User.create({
    email: "avi@gmail.com",
    password: "123456Aa$",
    fullname: "Avi Avi",
    address: "4 yehudith str.",
    dateOfBirth: new Date(),
  });
};
module.exports = {
  PopulateDB,
};
