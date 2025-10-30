const Poll = require("../models/Poll");

// TODO
// ACTIVITY 2a - Implement getPolls function (return all polls)
const getPolls = async () => {
    const poll = await Poll.find();
    console.log("Returning polls list...");
    return poll;
}

// ACTIVITY 2b - Implement getPoll function (get one poll by id)
const getPoll = async (id) => {
    const poll = await Poll.findById(id);
    console.log("Returning poll", id);
    return poll;
}

// END ACTIVITY 2

// TODO
// ACTIVITY 3a - Implement postPoll function to create a new poll
const postPoll = async ({ownerId, title, description, options}) => {
    const {ownerId, title, description, options} = pollData;

    const poll = {
        ownerId: ownerId,
        title: title,
        description: description,
        options: options,
        totalVotes: 0,
    };

    Poll.create(poll);
    console.log("Running postPoll()...");
    return poll;
}

// ACTIVITY 3b - Implement postVote function to cast a vote

// ACTIVITY 3c - Implement module exports

// END ACTIVITY 3

module.exports = {
    getPolls,
    getPoll,
    postPoll,

};
