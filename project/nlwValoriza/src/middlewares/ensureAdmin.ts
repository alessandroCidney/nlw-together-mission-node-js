// Verificação do usuário (é administrador ou não?)

import { Request, Response, NextFunction } from "express";

export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
	const admin = true; // Usuário admin

	//const admin = false; // Usuário não admin

	if(admin) {
		return next();
	}

	// No estado 401, o usuário não tem autorização para continuar
	return response.status(401).json({
		error: "Unauthorized"
	});
}