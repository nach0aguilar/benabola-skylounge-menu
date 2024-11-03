/*import { NextResponse } from 'next/server'
import db from '@/libs/db'

export async function POST(request: Request) {
    const data = await request.json()

    console.log(data)
    const newUser = await db.user.create({
        data
    })

    return NextResponse.json(newUser)
}*/

import { NextResponse } from 'next/server';
import db from '@/libs/db';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
    try {
        // Leer y parsear el JSON de la solicitud
        const data = await request.json();
        console.log("Data received:", data);

        const { email, username, password } = data;

        // Validación básica de campos
        if (!email || !username || !password) {
            console.error("Validation error: Missing fields");
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Verificar si el usuario ya existe
        const existingUser = await db.user_table.findUnique({
            where: { email }
        });

        if (existingUser) {
            console.error("User already exists with this email");
            return NextResponse.json(
                { error: 'User with this email already exists' },
                { status: 409 }
            );
        }

        // Crear el nuevo usuario
        const hashedPassword = await bcrypt.hash(data.password, 10);

        const newUser = await db.user_table.create({
            data: {
                email: data.email,
                username: data.username,
                password: hashedPassword
            }
        });

        const { password: _, ...user } = newUser;

        console.log("New user created:", newUser);

        return NextResponse.json(user, { status: 201 });

    } catch (error) {
        console.error("Error in register API:", error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

