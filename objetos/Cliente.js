import { Animal } from "./Animal.js";

export class Cliente {

    #nome;
    #telefone;
    #animais;

    constructor(nome, telefone) {
        this.#nome = nome;
        this.#telefone = telefone;
        this.#animais = [];
    }

    // =========================
    // GETTERS
    // =========================

    getNome() {
        return this.#nome;
    }

    getTelefone() {
        return this.#telefone;
    }

    getAnimais() {
        return [...this.#animais];
    }

    // =========================
    // SETTERS
    // =========================

    setNome(nome) {
        if (typeof nome !== "string") {
            return false;
        }

        this.#nome = nome;
        return true;
    }

    setTelefone(telefone) {
        if (typeof telefone !== "string") {
            return false;
        }

        this.#telefone = telefone;
        return true;
    }

    // =========================
    // RELACIONAMENTO CLIENTE 1:N ANIMAL
    // =========================

    addAnimal(animal) {

        if (!(animal instanceof Animal)) {
            return false;
        }

        // Evita duplicidade
        if (this.#animais.includes(animal)) {
            return true;
        }

        // Um Animal só pode pertencer a um Cliente
        if (animal.getCliente() !== null &&
            animal.getCliente() !== this) {
            return false;
        }

        this.#animais.push(animal);

        // Cria a referência cruzada
        if (animal.getCliente() !== this) {
            animal.setCliente(this);
        }

        return true;
    }

    // =========================
    // EXIBIÇÃO
    // =========================

    listarAnimais() {

        console.log(`Cliente: ${this.#nome}`);
        console.log("\nAnimais:");

        if (this.#animais.length === 0) {
            console.log("Nenhum animal cadastrado.");
            return;
        }

        for (const animal of this.#animais) {
            console.log(`• ${animal.getNome()}`);
        }
    }
}