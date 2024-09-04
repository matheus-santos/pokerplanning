const initialStateMock = {
  room: {
    name: "Room A",
    game: {
      type: "poker",
      title: "Task no. 100",
      description: "Describing initial statement about task",
      conclusion: "Conclusion about task",
      votes: [8, 3, 3],
      players_count: 3,
      consensus: 5,
    },
    /*history: [
      {
        type: "poker",
        title: "Task no. 100",
        description: "Describing initial statement about task",
        conclusion: "Conclusion about task",
        votes: [8, 3, 3],
        players_count: 3,
        consensus: 5,
      },
    ],*/
  },
  players: {
    1: {
      id: "1",
      name: "Matheus",
      status: "PICKING", // PICKING PICKED REVEALED,
      card: 8,
    },
    112: {
      id: "112",
      name: "Alice",
      // ...
    },
    113: {
      id: "113",
      name: "Bob",
      // ...
    },
  },
};

export default initialStateMock;
