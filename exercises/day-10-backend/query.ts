import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  const user = await prisma.user.create({
    data: {
      name: "Manoj",
      email: "manoj@gmail.com",

      posts: {
        create: [
          {
            title: "Learning Prisma",
            content: "Prisma is easy!"
          },
          {
            title: "Second Post",
            content: "Relations example"
          }
        ]
      }
    }
  });

  console.log(user);

  const users = await prisma.user.findMany({
    include: {
      posts: true
    }
  });

console.log(JSON.stringify(users, null, 2));

}

main()
.finally(async () => {
  await prisma.$disconnect();
});