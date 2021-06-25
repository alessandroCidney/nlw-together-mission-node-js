// Sobrescrevendo os tipos do Request do Express
// Foi necessário ativar o typeRoots no tsconfig.json

declare namespace Express {
	export interface Request {
		user_id: string;
	}
}