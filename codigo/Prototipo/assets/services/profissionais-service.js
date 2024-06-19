export class ProfissionalService {
    constructor() {
        this.urlBase = "http://localhost:3000/profissionais";
    }

    async getAll() {
        const resposta = await fetch(this.urlBase);
        if (!resposta.ok) {
            throw new Error(`Não foi possível buscar todos os profissionais: ${resposta.status} ${resposta.statusText}`);
        }
        return resposta.json();
    }

    async getById(id) {
        const resposta = await fetch(`${this.urlBase}/${id}`);
        if (!resposta.ok) {
            throw new Error(`Não foi possível localizar o profissional com id ${id}: ${resposta.status} ${resposta.statusText}`);
        }
        return resposta.json();
    }

    async create(profissional) {
        const resposta = await fetch(this.urlBase, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profissional)
        });
        if (!resposta.ok) {
            throw new Error(`Não foi possível criar o profissional: ${resposta.status} ${resposta.statusText}`);
        }
        return resposta.json();
    }

    async update(id, profissional) {
        const resposta = await fetch(`${this.urlBase}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profissional)
        });
        if (!resposta.ok) {
            throw new Error(`Não foi possível atualizar o profissional com id ${id}: ${resposta.status} ${resposta.statusText}`);
        }
        return resposta.json();
    }

    async delete(id) {
        const resposta = await fetch(`${this.urlBase}/${id}`, {
            method: 'DELETE'
        });
        if (!resposta.ok) {
            throw new Error(`Não foi possível excluir o profissional com id ${id}: ${resposta.status} ${resposta.statusText}`);
        }
        return resposta.status === 204 ? null : resposta.json();
    }
}