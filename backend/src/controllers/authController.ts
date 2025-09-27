import { Request, Response } from 'express';
import { comparePassword, hashPassword } from '../services/password.services';
import prisma from '../models/user';
import { generateToken } from '../services/auth.service';



export const register = async (req: Request, res: Response): Promise<void> => {

    const { email, password } = req.body;

    try {

        if (!email) {
            res.status(400).json({ message: 'El password es Obligatorio' })
            return
        }
        if (!email) {
            res.status(400).json({ mesagge: 'EL email es obligatoio' })
            return
        }

        const hashedPass = await hashPassword(password);
        const newUser = await prisma.create({
            data: {
                email,
                password: hashedPass
            },
        });

        const token = generateToken(newUser);
        res.status(201).json({ token });

    } catch (error: any) {
        console.error(error);
        if (error?.code === 'P2002' && error?.meta?.target?.includes('email')) {
            res.status(400).json({ message: 'El mail ingresado ya existe' })
        }

        console.error(error);
        res.status(500).json({ error: 'hubo un error en el registro' });
    }



}

export const login = async (req: Request, res: Response): Promise<void> => {

    const { email, password } = req.body;

    try {

        if (!email) {
            res.status(400).json({ message: 'El password es Obligatorio' })
            return
        }
        if (!email) {
            res.status(400).json({ mesagge: 'EL email es obligatoio' })
            return
        }

        const user = await prisma.findUnique({ where: { email } })
        if (!user) {
            res.status(404).json({ message: 'Usuario no encontrado' })
            return
        }
        const passwordMatch = await comparePassword(password, user.password);
        if (!passwordMatch) {
            res.status(401).json({ error: 'Usuario y contraseña no coinciden' })
        }
        const token = generateToken(user)
        res.status(200).json({
            token,
            user: {
                id: user.id,
                email: user.email,
            }
        })
    } catch (error: any) {
        console.log('Error: ', error);
    }

}

