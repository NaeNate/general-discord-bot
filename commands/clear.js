module.exports = {
  name: "clear",
  description: "clear up to 99 messages.",
  execute(message, args) {
    if (args[0] === "all") {
      return message.channel
        .bulkDelete(10000, true)
        .catch((err) => console.log(err));
    }

    const amount = parseInt(args[0]);
    if (isNaN(amount) || amount <= 1 || amount > 100) {
      return message.reply("Please enter a valid number");
    }

    message.channel.bulkDelete(amount, true).catch((err) => {
      console.error(err);
      message.channel.send("Error");
    });
  },
};
