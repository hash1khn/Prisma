import { PrismaClient } from "@prisma/client";
import { log } from "console";
const prisma = new PrismaClient({log:["query"]});

async function main() {
  // const user= await prisma.user.create({data: {name:"ZAi"}})
  // console.log(user);
  await prisma.user.deleteMany()
  const user = await prisma.user.create({
    data: {
      name: "ZAi",
      email: "ZAi@gmail.com",
      age: 27,
      userPreference:{
        create:{
          emailUpdate: true,
        },
      },
    },
    include:{
      userPreference: true,
    }
  });
  console.log(user);
}
main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
