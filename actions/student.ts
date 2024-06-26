"use server";

import { deleteSchema } from "@/components/Deleteform";
import { formSchema } from "@/components/Studentform";
import { updateSchema } from "@/components/Updateform";
import { prisma } from "@/lib/db";
import { z } from "zod";

export const Students = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    const createStudent = await prisma.post.create({
        data: {
            name: values.username,
            courseName: values.course,
            phonenumber: values.phonenumber,
            email: values.email,

        }
    });

    console.log(Students);
};

export const Students1 = async (values: z.infer<typeof deleteSchema> ) => {
    console.log(values);

    const deleteStudent = await prisma.post.deleteMany({
        where: {
            id: values.id,
        }
    });

    console.log(Students1);
};

export const Students2 = async (values: z.infer<typeof updateSchema> ) => {
    console.log(values);

    const updateStudent = await prisma.post.update({
        where: {
            id: values.id,
        },
        data: {
            courseName: values.course,
        }
    });

    console.log(Students2);
};



