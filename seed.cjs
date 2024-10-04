const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

(async () => {
	const result = await prisma.user.create({
		data: {
			username: "nortex",
			email: "contact@nortexdev.com",
			hashedPassword: await bcrypt.hash("password", 10),
			admin: true
		}
	});

	console.log(result);
})();
