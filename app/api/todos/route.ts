import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { todo } from "node:test";

const ITEMS_PER_PAGE = 10;

export async function GET(req: NextRequest){
    const userId = auth()

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 400 })

    }

    const {searchParams} = new URL (req.url)
    const page = parseInt (searchParams.get("page") || "1");
    const search = searchParams.get("search") || "" ;
    try {
        await prisma.todo.findMany({
            where: {
                userId,
                title: {
                    contains: search,
                    mode: "insensitive"
                }
            },
            orderBy: {createdAt: "desc"},
            take: ITEMS_PER_PAGE,
            skip: (page-1) * ITEMS_PER_PAGE
        })

        const totalItems = await prisma.todo.count({
            where: {
                userId,
                title: {
                    contains: search,
                    mode: "insensitive"
                }
            }
        })
        const totalPages = Math.ceil(totalItems/ITEMS_PER_PAGE)
        return NextResponse.json({
            todos,
            currentPage: page,
            totalPages

        })

    } catch (error) {
        console.error("Error fetching subscription status:", error);
        return NextResponse.json(
          { error: "Internal server error" },
          { status: 500 }
        );
      }
}

export async function POST() {
    const userId = auth()

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 400 })

    }

    const user = await prisma.user.findUnique({
        where: {id: userId},
        include: {todos: true}
    })

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    if (!user.isSubscribed && user.todos.length >=3 ){
        return NextResponse.json({
            error: "free users can do only 3"
        },{status: 403})
    }

    await request.JSON
}
