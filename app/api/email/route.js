import { PrismaClient } from "@/app/generated/prisma/client";
import { NextResponse } from "next/server";
const prisma=new PrismaClient();

export const POST=async(req)=>{
    const body=await req.json()
    const {email}=body;
    if(!email){
       return  NextResponse.json({message:"Input field Missing"},{status:401});
    }

    try{
        const existuser=await prisma.subscriber.findFirst({
        where:{
            email
        }
    })

    if(existuser){
        return NextResponse.json({message:"Already Subscribe"},{status:401});
    }

    const newUser=await prisma.subscriber.create({
        data:{
            email
        }
    })

    return NextResponse.json({message:"Suscribe"},{status:201});
    }catch(err){
        return   NextResponse.json({message:"Internal error"},{status:401});
    }
}