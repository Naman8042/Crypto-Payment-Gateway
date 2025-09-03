import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';
import bcrypt from "bcryptjs";


// Register user
export async function POST(req: NextRequest) {
  const { username, password, walletAddress } =  await req.json();

  console.log(username,password,walletAddress)
  // Hash password
  const passwordHash = await bcrypt.hash(password, 10);

  // Store in DB
  const user = await prisma.user.create({
    data: {
      username,
      passwordHash,
      walletAddress,
    },
  });

  return NextResponse.json(user, { status: 201 });  // ✅ Correct
}
