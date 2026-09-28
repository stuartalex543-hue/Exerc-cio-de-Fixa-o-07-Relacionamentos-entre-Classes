import { Animal } from "./Animal.js";

export class Prontuario {

    #numero;
    #observacoes;
    #animal;

    constructor(numero, observacoes = "") {
        this.#numero = numero;
        this.#observacoes = observacoes;
        this.#animal = null;
    }

    // =========================
    // GETTERS
    // =========================

    getNumero() {
        return this.#numero;
    }

    getObservacoes() {
        return this.#observacoes;
    }

    getAnimal() {
        return this.#animal;
    }

    // =========================
    // SETTERS
    // =========================

    setNumero(numero) {

        if (typeof numero !== "string") {
            return false;
        }

        this.#numero = numero;
        return true;
    }

    setObservacoes(observacoes) {

        if (typeof observacoes !== "string") {
            return false;
        }

        this.#observacoes = observacoes;
        return true;
    }

    // =========================
    // RELACIONAMENTO 1:1
    // =========================

    setAnimal(animal) {

        if (!(animal instanceof Animal)) {
            return false;
        }

        // Um prontuário pertence a somente um animal
        if (this.#animal !== null &&
            this.#animal !== animal) {
            return false;
        }

        // Um animal só pode possuir um prontuário
        if (animal.getProntuario() !== null &&
            animal.getProntuario() !== this) {
            return false;
        }

        this.#animal = animal;

        // Referência cruzada
        if (animal.getProntuario() !== this) {
            animal.setProntuario(this);
        }

        return true;
    }
}