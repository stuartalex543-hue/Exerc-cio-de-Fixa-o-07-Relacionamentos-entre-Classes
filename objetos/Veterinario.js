import { Animal } from "./Animal.js";

export class Veterinario {

    #nome;
    #crmv;
    #animais;

    constructor(nome, crmv) {
        this.#nome = nome;
        this.#crmv = crmv;
        this.#animais = [];
    }

    // =========================
    // GETTERS
    // =========================

    getNome() {
        return this.#nome;
    }

    getCRMV() {
        return this.#crmv;
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

    setCRMV(crmv) {

        if (typeof crmv !== "string") {
            return false;
        }

        this.#crmv = crmv;
        return true;
    }

    // =========================
    // RELACIONAMENTO N:N
    // =========================

    addAnimal(animal) {

        if (!(animal instanceof Animal)) {
            return false;
        }

        // Evita duplicidade
        if (this.#animais.includes(animal)) {
            return true;
        }

        this.#animais.push(animal);

        // Referência cruzada
        if (!animal.getVeterinarios().includes(this)) {
            animal.addVeterinario(this);
        }

        return true;
    }
}