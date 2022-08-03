const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function seed() {
  // const email = "rachel@remix.run";

  // cleanup the existing database
  // await prisma.user.delete({ where: { email } }).catch(() => {
  //   // no worries if it doesn't exist yet
  // });

  // const hashedPassword = await bcrypt.hash("racheliscool", 10);

  // const user = await prisma.user.create({
  //   data: {
  //     email,
  //     Password: {
  //       create: {
  //         hash: hashedPassword,
  //       },
  //     },
  //   },
  // });

  const [match1, match2, match3] = await Promise.all(
    getMatches().map((match) => {
      return prisma.match.create({ data: match });
    })
  );

  await Promise.all(
    getPlayers().map((player, index) => {
      return prisma.player.create({ data: { ...player, matchId: match1.id } });
    })
  );

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

function getMatches() {
  return [
    {
      team1: "india",
      team2: "new zealand",
      type: "odi",
      date: "15/07/2022",
    },
    {
      team1: "india",
      team2: "new zealand",
      type: "odi",
      date: "17/07/2022",
    },
    {
      team1: "india",
      team2: "new zealand",
      type: "odi",
      date: "19/07/2022",
    },
  ];
}

function getPlayers() {
  return [
    {
      name: "Rohit Sharma",
      team: "india",
      type: "batsman",
      score: 20,
      status: "not out",
    },
    {
      name: "Shikhar Dhawan",
      team: "india",
      type: "batsman",
      score: 10,
      status: "out",
    },
    {
      name: "Rahul Dravid",
      team: "india",
      type: "batsman",
      score: 0,
      status: "not out",
    },
    {
      name: "Virat Kohli",
      team: "india",
      type: "batsman",
      score: 0,
      status: "YTP",
    },
    {
      name: "Jasprit Bhumrah",
      team: "india",
      type: "bowler",
      score: 0,
      status: "YTP",
    },
    {
      name: "Martin Guptil",
      team: "new zealand",
      type: "batsman",
      score: 0,
      status: "YTP",
    },
    {
      name: "Brendon Mcculm",
      team: "new zealand",
      type: "batsman",
      score: 0,
      status: "YTP",
    },
    {
      name: "Dennis Vettori",
      team: "new zealand",
      type: "allrounder",
      score: 0,
      status: "YTP",
    },
    {
      name: "Shawn Michael",
      team: "new zealand",
      type: "allrounder",
      score: 0,
      status: "YTP",
    },
    {
      name: "Shane Bond",
      team: "new zealand",
      type: "bowler",
      score: 0,
      status: "YTP",
    },
  ];
}
