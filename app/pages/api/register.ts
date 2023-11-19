import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Adjust the path accordingly

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { user_name, email } = req.body;

  try {
    // Use Prisma to create a new user
    const newUser = await prisma.user.create({
      data: {
        name: user_name,
        email: email,
      },
    });

    // Log the new user
    console.log("New User:", newUser);

    // Respond with success
    res.status(200).json({ success: true, user: newUser });
  } catch (error) {
    // Handle any errors that occur during user creation
    console.error("Error creating user:", error);

    // Respond with an error
    res.status(500).json({ success: false, error: "Error creating user" });
  }
}